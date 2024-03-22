import useExpand from "../hooks/useExpand"
import useProgressBar from "../hooks/useProgessBar"
import DaysList from "./DaysList"
import DeleteOneChallengeModal from "./DeleteOneChallengeModal"
import ProgressBar from "./ProgressBar"
import UpdateForm from "./UpdateForm"
import useUpdateForm from "../hooks/useUpdateForm"
import Mask from "./Mask"
import { useEffect, useRef } from "react"


export default function Challenge({index, id, title, challengeDays, handleOpenDeleteOneChallengeModal }) {

    const {
        isExpand,
        handleIsExpand,
        handleSetIsExpandToFalse
    } = useExpand()

    const moreDiv = useRef()
    const dotRef = useRef()

    const {progressBarValueNow} = useProgressBar(challengeDays)

    const {isUpdateForm, handleSetIsUpdateForm, handleCloseUpdateForm} = useUpdateForm()

    const hideExp = e => {
        if(e.target != moreDiv.current)
        {
            handleSetIsExpandToFalse()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [])

    const handleOutsideClick = (e) => {

        if(e.target == dotRef.current)
        {
            handleIsExpand()
            return;
        }

        // or we can write newRef.current !== e.target
        if (moreDiv.current && !moreDiv.current.contains(e.target)) {
           handleSetIsExpandToFalse()
        }
      };

    
    return (
        <div  className="relative border py-5 px-3 shadow-md dark:bg-chagllenge-bg-dark dark:border-[#111519]">
            {isUpdateForm && <Mask />}
            <div className="relative flex items-center mb-5 justify-between">
                <h2 className="challenge-title relative uppercase tracking-wider font-semibold py-3 mr-8 dark:text-dark-text-secondry">{title}</h2>
                {isUpdateForm && <UpdateForm id={id} title={title} handleCloseUpdateForm={handleCloseUpdateForm}/>}
                <div className="relative">
                    <button className="flex justify-center items-center dark:text-white/70">
                        <svg ref={dotRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </button>
                    <div onClick={e => hideExp(e)}  ref={moreDiv} className="absolute bg-[#333945] rounded-sm text-white shadow-sm z-10 right-0 top-full translate-y-6 invisible opacity-0 py-3 flex flex-col justify-start gap-3  transition-all duration-300 aria-expanded:translate-y-2 aria-expanded:opacity-100 aria-expanded:visible" aria-expanded={`${isExpand ? "true" : "false"}`}>
                        <button onClick={() => handleOpenDeleteOneChallengeModal(index)} className="px-10 py-2 text-lef">Delete</button>
                        <button onClick={handleSetIsUpdateForm} className="px-10 py-2 text-lef">Edit</button>
                        <div className="absolute w-2 aspect-square bg-[#333945] right-2 -top-1 rotate-45"></div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <ProgressBar value={progressBarValueNow} />
            </div>
            <DaysList challengeDays={challengeDays} challengeId={id} />
            <DeleteOneChallengeModal index={index} challengeId={id} title={title} />
        </div>
    )
}