import { useAppContext } from "../AppContext"
import Challenge from "./Challenge"


export default function ChallengesList() {

    const { challenges, handleOpenDeleteOneChallengeModal,   challengesListInput } = useAppContext()

    const filterdChallenge = challengesListInput == "all" ? challenges : challenges.filter(challenge => challenge.title === challengesListInput)

    return (
        <div className="grid gap-14 mt-10 mb-20 md:grid-cols-2 md:gap-3">
            {filterdChallenge.map((challenge, index) => {
                return (
                    <Challenge key={challenge.id} {...challenge} index={index} handleOpenDeleteOneChallengeModal={handleOpenDeleteOneChallengeModal} />

                )
            })}
        </div>
    )
}