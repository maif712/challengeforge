

export default function ConfirmBtn({modalRef, handlAction}) {
    return (
        <button className="w-full capitalize tracking-wider font-bold text-sm rounded-lg bg-blue-700 text-white py-2 dark:bg-[#51a1be] dark:text-[#e5ebec]" onClick={() => { handlAction(), modalRef.current.close() }}>confirm</button>
    )
}