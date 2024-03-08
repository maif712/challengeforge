import { useAppContext } from "../AppContext"
import Day from "./Day"


export default function DaysList() {

    const {Days, handleIsCompleted, nowDate} = useAppContext()
    return (
        <div className="grid gap-5 mt-5 mb-20 md:grid-cols-3">
            {Days.map(day => {
                return (
                    <Day key={day.id} {...day} handleIsCompleted={handleIsCompleted} nowDate={nowDate} />
                )
            })}
        </div>
    )
}