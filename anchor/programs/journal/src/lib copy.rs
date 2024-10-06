use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("E1nRjcapmQgaL9FcPv49stUJxUAzd9ybdHDiMw5hYLor");

#[program]
mod journal {
    use super::*;

    pub fn create_game(
        ctx: Context<CreateEntry>,
        title: String,
        message: String,
    ) -> Result<()> {
        msg!("Game Created");
     

        let game_entry = &mut ctx.accounts.game_entry;
        game_entry.owner = ctx.accounts.owner.key();
        game_entry.title = title;
        game_entry.message = message;
        Ok(())
    }

    pub fn get_games_by_owner(_ctx: Context<GetGamesByOwner>) -> Result<Vec<GameEntryState>> {
        // This function will be implemented on the client side
        // We just need to define it here to create the instruction
        Ok(vec![])
    }

    pub fn update_game_entry(
        ctx: Context<UpdateEntry>,
        title: String,
        message: String,
    ) -> Result<()> {
        msg!("Journal Entry Updated");
        msg!("Title: {}", title);
        msg!("Message: {}", message);

        let game_entry = &mut ctx.accounts.game_entry;
        game_entry.message = message;

        Ok(())
    }

    pub fn delete_game_entry(_ctx: Context<DeleteEntry>, title: String) -> Result<()> {
        msg!("Journal entry titled {} deleted", title);
        Ok(())
    }
}

#[account]
pub struct JournalEntryState {
    pub owner: Pubkey,
    pub title: String,
    pub message: String,
}

#[derive(Accounts)]
#[instruction(title: String, message: String)]
pub struct CreateEntry<'info> {
    #[account(
        init,
        seeds = [title.as_bytes(), owner.key().as_ref()], 
        bump, 
        payer = owner, 
        space = 8 + 32 + 4 + title.len() + 4 + message.len()
    )]
    pub game_entry: Account<'info, JournalEntryState>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct GetJournalsByOwner<'info> {
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String, message: String)]
pub struct UpdateEntry<'info> {
    #[account(
        mut,
        seeds = [title.as_bytes(), owner.key().as_ref()], 
        bump, 
        realloc = 8 + 32 + 4 + title.len() + 4 + message.len(),
        realloc::payer = owner, 
        realloc::zero = true, 
    )]
    pub game_entry: Account<'info, JournalEntryState>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(title: String)]
pub struct DeleteEntry<'info> {
    #[account( 
        mut, 
        seeds = [title.as_bytes(), owner.key().as_ref()], 
        bump, 
        close= owner,
    )]
    pub game_entry: Account<'info, JournalEntryState>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}
