import { useAppContext } from "../AppContext"
import CloseBtn from "./modalBtns/CloseBtn"
import ConfirmBtn from "./modalBtns/ConfirmBtn"


export default function CreateModal() {

    const { modalRef, handleMakeChallenge, dayNumber, titleInput } = useAppContext()

    return (
        <dialog className="max-w-[500px] p-4 shadow-lg rounded-xl backdrop:bg-black/30 dark:backdrop:bg-[#3a3a3ac2] dark:bg-modal-bg-dark" ref={modalRef}>
            <div className="flex justify-center text-yellow-400 mb-7 dark:text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <p className="capitalize text-[#333335] font-semibold dark:text-dark-text-secondry">Do you want to Create <span className="bg-emerald-100 px-2 py-1 rounded-sm dark:bg-filter-input-dark">{titleInput}</span> with <span className="bg-emerald-100 px-2 py-1 rounded-sm dark:bg-filter-input-dark">{dayNumber}</span> Days?</p>
            <div className="flex justify-between gap-3 mt-6">
                <CloseBtn modalRef={modalRef}/>
                <ConfirmBtn modalRef={modalRef} handlAction={handleMakeChallenge} />
            </div>
        </dialog>
    )
}