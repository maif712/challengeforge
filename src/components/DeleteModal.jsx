import { useAppContext } from "../AppContext"
import CloseBtn from "./modalBtns/CloseBtn"
import ConfirmBtn from "./modalBtns/ConfirmBtn"


export default function DeleteModal() {

    const {deleteModalRef, handleResetDays} = useAppContext()
    return (
        <dialog ref={deleteModalRef} className="p-4 shadow-lg rounded-xl backdrop:bg-black/30 dark:backdrop:bg-[#3a3a3ac2] dark:bg-modal-bg-dark">
            <div className="flex justify-center text-red-600 mb-7 dark:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
            </div>
            <p className="capitalize text-[#333335] font-semibold dark:text-dark-text-secondry">Do you want to Delete All Challenges?</p>
            <div className="flex justify-between gap-3 mt-6">
                <CloseBtn modalRef={deleteModalRef} />
                <ConfirmBtn modalRef={deleteModalRef} handlAction={handleResetDays} />
            </div>
        </dialog>
    )
}