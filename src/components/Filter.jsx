import { useAppContext } from "../AppContext"
import { daysInput } from "../constans"

export default function Filter() {

    const {
        startFrom,
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState
    } = useAppContext()



    return (
        <section>
            <div className="layout-wrapper">
                <div className="border p-2 flex flex-col gap-5 bg-gray-100 dark:bg-[#182631] dark:border-border-secondry md:grid md:grid-cols-2">
                    <div className="flex items-center justify-between bg-white py-2 px-3 shadow-sm dark:bg-filter-input-dark">
                        <p className="font-semibold uppercase tracking-wider w-full text-gray-500 text-sm dark:text-dark-text-secondry">start from</p>
                        <select className="border-l h-10 px-3 uppercase font-semibold tracking-wider bg-transparent dark:text-white dark:border-l-[#5e9eff]" value={startFrom} onChange={handleStartDayChange} name="" id="">
                            <option className="dark:bg-dark" value="today">today</option>
                            <option className="dark:bg-dark" value="tomorrow">tomorrow</option>
                        </select>
                    </div>
                    <div className={`${filterErrorState ? "active-error" : ""} flex items-center border border-transparent justify-between bg-white py-2 px-3 shadow-sm dark:bg-filter-input-dark`}>
                        <p className="font-semibold uppercase tracking-wider w-full text-gray-500 text-sm dark:text-dark-text-secondry">choose your days number</p>
                        <select className="border-l h-10 px-3 uppercase font-semibold tracking-wider bg-transparent dark:text-white dark:border-l-[#5e9eff]" value={dayNumber} onChange={handleDayNumberChange} name="" id="">
                            <option className="dark:bg-dark" value="">Days</option>
                            {daysInput.map(day => {
                                return (
                                    <option className="dark:bg-dark" key={day} value={day}>{day}</option>
                                )
                            })}
                        </select>

                    </div>
                </div>
            </div>
        </section>
    )
}