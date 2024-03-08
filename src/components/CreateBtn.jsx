import { useAppContext } from "../AppContext"


export default function CreateBtn() {

    const {handleOpenModal} = useAppContext()

    return (
        <div>
            <button className="py-1 px-3 bg-orange-400 uppercase font-semibold text-white/90 text-lg tracking-wider rounded-[4px]" onClick={handleOpenModal}>create days</button>
        </div>
    )
}