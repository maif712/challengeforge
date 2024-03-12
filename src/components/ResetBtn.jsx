import { useAppContext } from "../AppContext"

export default function ResetBtn() {

    const {handleOpenDeleteModal} = useAppContext()
    return (
        <div>
            <button className="py-1 px-3 border uppercase font-semibold text-[#292929] text-lg tracking-wider rounded-[4px] dark:bg-dark-footer dark:text-dark-text-secondry dark:border-border-primary" onClick={handleOpenDeleteModal}>delete all challenge(s)</button>
        </div>
    )
}