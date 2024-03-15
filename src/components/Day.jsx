

export default function Day({ id, title, date, isCompleted, handleIsCompleted, nowDate, challengeId }) {

    const objectDay = new Date(date)
    const getMissedDay = () => {
        const isPast = objectDay.getFullYear() <= nowDate.getFullYear() && objectDay.getMonth() <= nowDate.getMonth() && objectDay.getDate() < nowDate.getDate()
        const biggerMonthSmallerDay = objectDay.getFullYear() <= nowDate.getFullYear() && nowDate.getMonth() > objectDay.getMonth() && objectDay.getDate() > nowDate.getDate()
        if(isPast) {
            return isPast
        }
        else if(biggerMonthSmallerDay) {
            return biggerMonthSmallerDay
        }
    }

    const getToday = () => {
        const isToday = objectDay.toDateString() == nowDate.toDateString()
        return isToday
    }


    return (
        <div className={`day-card group relative border-2 border-dashed shadow-md p-4 transition scroll-pt-[1rem] betterhover:hover:!border-[#00bbd4] betterhover:hover:bg-[#00bbd423] dark:border-border-secondry ${!isCompleted && getMissedDay() ? "missed-day" : ""} ${isCompleted ? "bg-[#00bbd423] !border-[#00bbd4]" : ""} ${getToday() ? "active current-day" : ""}`}>
            <div className="flex items-center gap-5 mb-4">
                <input checked={isCompleted} onChange={() => handleIsCompleted(challengeId, id)} className="appearance-none rounded-full transition-all w-5 h-5 outline outline-gray-100 outline-offset-[6px] checked:bg-[#00a8f4] checked:outline-[#00a8f4] betterhover:group-hover:outline-[#00a8f4] dark:outline-border-secondry" type="checkbox" id={id} />
                <label className="uppercase text-lg font-semibold cursor-pointer dark:text-dark-text-secondry" htmlFor={id}>{title}</label>
            </div>
            <p className="flex gap-2 bg-slate-300 font-semibold tracking-wider w-max py-1 px-5 rounded-[4px] text-[#292929] dark:bg-filter-input-dark dark:text-white">
                <span className="h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                </span>
                {objectDay.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "2-digit" })}
            </p>
        </div>
    )
}