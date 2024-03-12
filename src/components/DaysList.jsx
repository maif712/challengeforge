import { useAppContext } from "../AppContext"
import Day from "./Day"


export default function DaysList({challengeDays, challengeId}) {

    const { handleIsCompleted, nowDate } = useAppContext()
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {challengeDays?.map(day => {
                return (
                    <Day key={day.id} {...day} challengeId={challengeId} handleIsCompleted={handleIsCompleted} nowDate={nowDate} />
                )
            })}
        </div>
    )
}