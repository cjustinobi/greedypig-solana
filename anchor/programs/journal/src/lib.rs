use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("2MKHvQoStSV7tx6ywCSgGVoe7mhowfaQxnupbbUiNFmm");

#[program]
mod greedy_pig {
    use super::*;

    pub fn create_game(
        ctx: Context<CreateGame>,
        title: String,
        winning_score: u64,
        staking_amount: u64,
        apparatus: String, 
        mode: String,
        max_players: u8
    ) -> Result<()> {
   
        require!(
            apparatus == "dice" || apparatus == "roulette",
            ErrorCode::InvalidApparatus
        );
        require!(
            mode == "score_based" || mode == "turn_based", // Add other modes here if needed
            ErrorCode::InvalidGameMode
        );
     

        let game_account = &mut ctx.accounts.game_account;
        game_account.owner = ctx.accounts.owner.key();
        game_account.title = title;
        game_account.winning_score = winning_score;
        game_account.staking_amount = staking_amount;
        game_account.apparatus = apparatus;
        game_account.mode = mode;
        game_account.owner = ctx.accounts.owner.key();
        game_account.max_players = max_players;
        game_account.players = Vec::new();
        game_account.current_player_index = 0;
        game_account.game_state = GameState::WaitingForPlayers;
        game_account.leaderboard = Vec::new();

        msg!("Game Created: {}", game_account.title);
        Ok(())
    }

    pub fn join_game(ctx: Context<JoinGame>) -> Result<()> {
        let game_account = &mut ctx.accounts.game_account;
        let player = &ctx.accounts.player;

        require!(
            game_account.game_state == GameState::WaitingForPlayers,
            ErrorCode::GameAlreadyStarted
        );
        require!(
            game_account.players.len() < game_account.max_players as usize,
            ErrorCode::GameFull
        );
        require!(
            !game_account.players.contains(&player.key()),
            ErrorCode::PlayerAlreadyJoined
        );

        game_account.players.push(player.key());
        game_account.leaderboard.push(PlayerScore {
            player: player.key(),
            temp_score: 0,
            final_score: 0,
        });

        msg!("Player joined the game: {}", player.key());
        Ok(())
    }

    pub fn start_game(ctx: Context<StartGame>) -> Result<()> {
        let game_account = &mut ctx.accounts.game_account;
        
        require!(
            game_account.game_state == GameState::WaitingForPlayers,
            ErrorCode::GameAlreadyStarted
        );
        require!(
            game_account.players.len() >= 2,
            ErrorCode::NotEnoughPlayers
        );

        game_account.game_state = GameState::InProgress;
        game_account.current_player_index = 0;

        msg!("Game started");
        Ok(())
    }

    pub fn play_turn(ctx: Context<PlayTurn>, roll_result: u8) -> Result<()> {
    let game_account = &mut ctx.accounts.game_account;
    let player = &ctx.accounts.player;

    require!(
        game_account.game_state == GameState::InProgress,
        ErrorCode::GameNotInProgress
    );
    require!(
        game_account.players[game_account.current_player_index as usize] == player.key(),
        ErrorCode::NotPlayerTurn
    );

    // Calculate the next player index first (no mutable borrow here)
    let next_player_index = if roll_result == 1 {
        next_player(game_account.current_player_index, game_account.players.len())
    } else {
        game_account.current_player_index
    };

    // Find the player's score index and update it
    let player_index = game_account.leaderboard
        .iter()
        .position(|score| score.player == player.key())
        .ok_or(ErrorCode::PlayerNotFound)?;

    let player_score = &mut game_account.leaderboard[player_index];

    if roll_result == 1 {
        player_score.temp_score = 0;
    } else {
        player_score.temp_score += roll_result as u64;
    }

    if player_score.final_score + player_score.temp_score >= game_account.winning_score {
        game_account.game_state = GameState::Finished;
    }

    // Now that the mutable borrow on `player_score` is complete, update the player index
    game_account.current_player_index = next_player_index;

    msg!("Player rolled: {}", roll_result);
    Ok(())
}

    pub fn pass_turn(ctx: Context<PassTurn>) -> Result<()> {
        let game_account = &mut ctx.accounts.game_account;
        let player = &ctx.accounts.player;

        require!(
            game_account.game_state == GameState::InProgress,
            ErrorCode::GameNotInProgress
        );
        require!(
            game_account.players[game_account.current_player_index as usize] == player.key(),
            ErrorCode::NotPlayerTurn
        );

        let player_score = game_account.leaderboard.iter_mut()
            .find(|score| score.player == player.key())
            .ok_or(ErrorCode::PlayerNotFound)?;

        player_score.final_score += player_score.temp_score;
        player_score.temp_score = 0;

        if player_score.final_score >= game_account.winning_score {
            game_account.game_state = GameState::Finished;
        } else {
            next_player(game_account.current_player_index, game_account.players.len());
        }

        msg!("Player passed turn");
        Ok(())
    }

    pub fn get_games_by_owner(_ctx: Context<GetGamesByOwner>) -> Result<Vec<GameAccountState>> {
        // This function will be implemented on the client side
        // We just need to define it here to create the instruction
        Ok(vec![])
    }



}

#[account]
pub struct GameAccountState {
    pub title: String,
    pub winning_score: u64,
    pub staking_amount: u64,
    pub apparatus: String,
    pub mode: String,
    pub owner: Pubkey,
    pub players: Vec<Pubkey>,
    pub max_players: u8,
    pub current_player_index: u8,
    pub game_state: GameState,
    pub leaderboard: Vec<PlayerScore>,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
pub struct PlayerScore {
    pub player: Pubkey,
    pub temp_score: u64,
    pub final_score: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum GameState {
    WaitingForPlayers,
    InProgress,
    Finished,
}

impl Default for GameState {
    fn default() -> Self {
        GameState::WaitingForPlayers
    }
}

impl GameAccountState {
    pub fn space(title: &str, apparatus: &str, mode: &str, max_players: u8) -> usize {
        8 +  // discriminator
        32 + // owner (Pubkey)
        4 + title.len() + // title
        8 + // winning_score (u64)
        8 + // staking_amount (u64)
        4 + apparatus.len() + // apparatus
        4 + mode.len() + // mode
        32 + // owner (Pubkey)
        1 + // max_players (u8)
        4 + (32 * max_players as usize) + // players (Vec<Pubkey>)
        1 + // current_player_index (u8)
        1 + // game_state (enum, assuming 1 byte)
        4 + (PlayerScore::space() * max_players as usize) // leaderboard (Vec<PlayerScore>)
    }
}

impl PlayerScore {
    pub fn space() -> usize {
        32 + // player (Pubkey)
        8 +  // temp_score (u64)
        8    // final_score (u64)
    }
}

#[derive(Accounts)]
#[instruction(title: String, winning_score: u64, staking_amount: u64, apparatus: String, mode: String, max_players: u8)]
pub struct CreateGame<'info> {
    #[account(
        init,
        seeds = [title.as_bytes(), owner.key().as_ref()], 
        bump, 
        payer = owner,
        space = GameAccountState::space(&title, &apparatus, &mode, max_players)


    )]
    pub game_account: Account<'info, GameAccountState>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct JoinGame<'info> {
    #[account(mut)]
    pub game_account: Account<'info, GameAccountState>,
    pub player: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct GetGamesByOwner<'info> {
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

fn next_player(current_index: u8, players_count: usize) -> u8 {
    (current_index + 1) % players_count as u8
}

// fn next_player(game_account: &mut GameAccountState) {
//     game_account.current_player_index = (game_account.current_player_index + 1) % game_account.players.len() as u8;
// }

#[derive(Accounts)]
pub struct StartGame<'info> {
    #[account(mut)]
    pub game_account: Account<'info, GameAccountState>,
    pub player: Signer<'info>,
}

#[derive(Accounts)]
pub struct PlayTurn<'info> {
    #[account(mut)]
    pub game_account: Account<'info, GameAccountState>,
    pub player: Signer<'info>,
}

#[derive(Accounts)]
pub struct PassTurn<'info> {
    #[account(mut)]
    pub game_account: Account<'info, GameAccountState>,
    pub player: Signer<'info>,
}


#[error_code]
pub enum ErrorCode {
    #[msg("The game is already full")]
    GameFull,
    #[msg("Player has already joined this game")]
    PlayerAlreadyJoined,
    #[msg("Invalid apparatus specified")]
    InvalidApparatus,
    #[msg("Invalid game mode specified")]
    InvalidGameMode,
    #[msg("Game has already started")]
    GameAlreadyStarted,
    #[msg("Not enough players to start the game")]
    NotEnoughPlayers,
    #[msg("Game is not in progress")]
    GameNotInProgress,
    #[msg("It's not this player's turn")]
    NotPlayerTurn,
    #[msg("Player not found in the game")]
    PlayerNotFound,
}