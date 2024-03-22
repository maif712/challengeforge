import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../AppContext"


export default function UpdateForm({ id, title, handleCloseUpdateForm }) {

    const [updateFormTitleInput, setUpdateFormTitleInput] = useState("")

    const inputRef = useRef()
    useEffect(() => {
        setUpdateFormTitleInput(title)
    }, [])

    const handleSelect = () => {
        inputRef.current.select()
    }

    const { handleUpdateChallenge } = useAppContext()

    return (
        <div className="max-w-[500px] bg-white shadow-lg rounded-xl dark:bg-modal-bg-dark absolute p-10 top-1/2 left-1/2 -translate-x-1/2 z-20">
            <form className="flex flex-col gap-5" onSubmit={(e) => {handleUpdateChallenge(e, id, updateFormTitleInput), handleCloseUpdateForm(e)}}>
                <input className="py-3 border border-transparent bg-gray-100 px-3 text-xl outline-none focus:border-blue-500 placeholder:text-sm placeholder:tracking-wider placeholder:uppercase dark:bg-filter-input-dark dark:text-dark-text-secondry" onFocus={handleSelect} ref={inputRef} value={updateFormTitleInput} onChange={(e) => setUpdateFormTitleInput(e.target.value)} type="text" />
                <div className="flex gap-3">
                    <button onClick={handleCloseUpdateForm} className="w-full capitalize tracking-wider font-bold text-sm rounded-lg bg-[#efeff9] text-[#686585] dark:bg-inherit dark:text-[#4189a3]" >close</button>
                    <button className="w-full capitalize tracking-wider font-bold text-sm rounded-lg bg-blue-700 text-white py-2 dark:bg-[#51a1be] dark:text-[#e5ebec]" >confirm</button>
                </div>
            </form>
        </div>
    )
}