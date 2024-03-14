
export default function useProgressBar(challengeDays) {


    let progressBarValueNow = 0

    const daysLength = 100 / challengeDays?.length
    let challengeDayindex = 0
    challengeDays?.forEach((day) => {
        if (day.isCompleted) {
            challengeDayindex++
            progressBarValueNow = daysLength * challengeDayindex
        }
    })

    return {progressBarValueNow}
}