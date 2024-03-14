
export default function useProgressBar(challengeDays) {


    let progressBarValueNow = 0

    const daysLength = 100 / challengeDays?.length

    const isCompletedDaysArray = challengeDays?.filter(day => day.isCompleted)
    progressBarValueNow = daysLength * isCompletedDaysArray.length

    return {progressBarValueNow}
}