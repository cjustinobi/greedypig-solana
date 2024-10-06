import { useState, FC, ChangeEvent } from 'react'
import OffOnchainTab from "./OffOnchainTab"
import InputField from "./InputField"
import InputRadio from "./InputRadio"
import FormBtn from "./FormBtn"
import { useGameProgram } from '@/hooks/useGameProgram'
import { useWallet } from '@solana/wallet-adapter-react'


interface FormData {
  title: string
  winningScore: string
  stakingAmount: string
  die: string
  roulette: string
  turnBased: string
  scoreBased: string
}

const CreateGameForm: FC = () => {

  const [formData, setFormData] = useState<FormData>({
    title: '',
    winningScore: '',
    stakingAmount: '',
    die: '',
    roulette: '',
    turnBased: '',
    scoreBased: ''
  })

  const [onChainTab, setOnChainTab] = useState<boolean>(true);
  const [showNewInputField, setShowNewInputField] = useState<boolean>(false);
  const [apparatus, setApparatus] = useState<string>('dice');
  const [mode, setMode] = useState<string>('turn_based')

  const { createGame } = useGameProgram()
  const { publicKey } = useWallet()

  const handleTabChange = (tab: boolean) => {
    setOnChainTab(prevState => !prevState)
};


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCreateGame = () => {
    debugger
    if (publicKey) {
      createGame.mutateAsync({
        title: formData.title,
        apparatus: apparatus,
        mode: mode,
        max_players: 2,
        winning_score: Number(formData.winningScore),
        staking_amount: Number(formData.stakingAmount),
        owner: publicKey
      })
    }
  }


  const handleCancel = () => {
    alert('Button clicked!')
  }

  return (
    <div className="bg-indigo py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <form className="w-[475px] gap-8 bg-custom-gray mx-auto max-w-lg rounded-2xl">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <OffOnchainTab
              options={[true, false]}
              onChainTab={onChainTab}
              onTabChange={handleTabChange}
            />

            <InputField
              label="Title"
              name="title"
              placeholder="Title of game"
              value={formData.title}
              onChange={handleChange}
            />
            <InputField
              label="Winning score"
              name="winningScore"
              placeholder="e.g. 20000"
              value={formData.winningScore}
              onChange={handleChange}
            />

            {!onChainTab && (
              <InputField
                label="Staking amount"
                name="stakingAmount"
                placeholder="$200"
                value={formData.stakingAmount}
                onChange={handleChange}
              />
            )}

            <h2 className="block text-white font-Inter_18pt-SemiBold text-sm font-semibold">
              Game Apparatus
            </h2>
            <InputRadio
              name="gameApparatus"
              options={[
                { label: 'Die', value: 'dice' },
                { label: 'Roulette', value: 'roulette' }
              ]}
              selectedOption={apparatus}
              onOptionChange={setApparatus}
            />
            <h2 className="block text-white font-Inter_18pt-SemiBold text-sm font-semibold">
              Mode
            </h2>
            <InputRadio
              name="mode"
              options={[
                { label: 'Turn Based', value: 'turn_based' },
                { label: 'Score Based', value: 'score_based' }
              ]}
              selectedOption={mode}
              onOptionChange={setMode}
            />

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              {onChainTab ? (
                <>
                  <FormBtn
                    label="Cancel"
                    type="button"
                    onClick={handleCancel}
                    className="basis-1/2 bg-orange-500 outline-none ring-indigo-300 transition hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Cancel
                  </FormBtn>
                  <FormBtn
                    label="Create game"
                    type="button"
                    onClick={handleCreateGame}
                    className="basis-1/2 bg-violet-700 outline-none ring-indigo-300 transition hover:bg-orange-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Create game
                  </FormBtn>
                </>
              ) : (
                <FormBtn
                  label="Create game"
                  type="button"
                  onClick={handleCreateGame}
                  className="w-full bg-violet-700 outline-none ring-indigo-300 transition hover:bg-orange-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Create game
                </FormBtn>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default CreateGameForm