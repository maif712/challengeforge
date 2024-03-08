

export default function CloseBtn({modalRef}) {
    return (
        <button className="w-full capitalize tracking-wider font-bold text-sm rounded-lg bg-[#efeff9] text-[#686585] dark:bg-inherit dark:text-[#4189a3]" onClick={() => modalRef.current.close()}>close</button>
    )
}