import useExpand from "../hooks/useExpand"
import DaysList from "./DaysList"
import DeleteOneChallengeModal from "./DeleteOneChallengeModal"


export default function Challenge({index, id, title, challengeDays, handleOpenDeleteOneChallengeModal }) {

    const {
        isExpand,
        handleIsExpand,
    } = useExpand()

    return (
        <div className="border py-5 px-3 shadow-md dark:bg-chagllenge-bg-dark dark:border-[#111519]">
            <div className="flex items-center mb-5 justify-between">
                <h2 className="challenge-title relative uppercase tracking-wider font-semibold py-3 mr-8 dark:text-dark-text-secondry">{title}</h2>
                <div className="relative">
                    <button onClick={handleIsExpand} className="flex justify-center items-center dark:text-white/70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </button>
                    <div className="absolute bg-[#333945] rounded-sm text-white shadow-sm z-10 right-0 top-8 py-3 flex flex-col justify-start gap-3 invisible opacity-0 transition-all duration-300 aria-expanded:opacity-100 aria-expanded:visible" aria-expanded={`${isExpand ? "true" : "false"}`}>
                        <button onClick={() => handleOpenDeleteOneChallengeModal(index)} className="px-10 py-2 text-lef">Delete</button>
                        <button className="px-10 py-2 text-lef">Edit</button>
                    </div>
                </div>
            </div>
            <DaysList challengeDays={challengeDays} challengeId={id} />
            <DeleteOneChallengeModal index={index} challengeId={id} title={title} />
        </div>
    )
}