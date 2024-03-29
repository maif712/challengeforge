import { createContext, createRef, useContext, useEffect, useRef, useState } from "react";
import useFilter from "./hooks/useFilter";
import useDarkTheme from "./hooks/useDarkThem";
import useSticky from "./hooks/useSticky";
import useGoTopBtn from "./hooks/useGoTopBtn";
import useExpand from "./hooks/useExpand";
import useUpdateForm from "./hooks/useUpdateForm";


const AppContext = createContext(null)

export function AppContextProvider({ children }) {



    const [challenges, setChallenges] = useState(() => {
        const localValue = localStorage.getItem("DAYS")
        if (localValue == null) return []

        return JSON.parse(localStorage.getItem("DAYS"))
    })

    const [nowDate, setNowDate] = useState(new Date())


    // set scroll postion to the current day top postion
    useEffect(() => {

        // remove the last scroll position
        window.history.scrollRestoration = 'manual'

        const windowQuerry = window.matchMedia("(max-width: 600px)")
        const currentDayCard = document.querySelector(".current-day")
        const DayCardTopPosition = currentDayCard?.getBoundingClientRect().top

        const myTimeout = setTimeout(() => {
            if (windowQuerry.matches) {

                window.scrollTo({
                    top: DayCardTopPosition - 110,
                    left: 0,
                    behavior: "smooth"
                })
            }
        }, 1000);

        return () => clearTimeout(myTimeout)

    }, [])
    // End

    // Modals
    const modalRef = useRef()
    const deleteModalRef = useRef()
    // const deleteOneChallengeModalRef = useRef(challenges.map(() => createRef()))
    const [dialogDeleteRefs, setDialogDeleteRefs] = useState([])

    useEffect(() => {
        setDialogDeleteRefs(challenges.map(() => createRef()))
    }, [challenges])

    const handleOpenModal = () => {

        if (titleInput == "" && dayNumber == "") {
            setFilterErrorState({
                titleIn: "errore",
                daysIn: "errore"
            })
            return;
        }
        else if (titleInput == "") {
            setFilterErrorState(prev => {
                return {
                    ...prev,
                    titleIn: "errore"
                }
            })
            return;
        }
        else if (dayNumber == "") {
            setFilterErrorState(prev => {
                return {
                    ...prev,
                    daysIn: "errore"
                }
            })
            return;
        }
        setFilterErrorState({
            titleIn: "",
            daysIn: ""
        })

        if (challenges.length > 0) {
            modalRef.current.showModal()
        }
        else {
            handleMakeChallenge()
        }
    }

    const handleOpenDeleteModal = () => {
        deleteModalRef.current.showModal()
    }

    const handleOpenDeleteOneChallengeModal = (index) => {
        // deleteOneChallengeModalRef.current[index].current.showModal()
        dialogDeleteRefs[index].current.showModal()
    }
    // End

    // Choose your challenge
    const [challengesTitle, setChallengesTitle] = useState([])
    const [challengesListInput, setChallengesListInput] = useState(challenges[0]?.title || "")

    const handleChallengesListInput = (e) => {
        setChallengesListInput(e.target.value)
    }

    useEffect(() => {
        const newArray = challenges.map(challenge => challenge.title)
        setChallengesTitle(newArray)
    }, [challenges])
    // End


    // Filter Custom hook 
    const {
        startFrom,
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState,
        setFilterErrorState,
        titleInput,
        handleTitleInput,
    } = useFilter()
    // End

    // Dark theme custom hook
    const { isDark, handleIsDark } = useDarkTheme()
    // End

    // Sticky custom hook
    const { isSticky } = useSticky()
    // End

    // Go top button custom hook 
    const { isShowBtn, handleScrollToTopClick } = useGoTopBtn()
    // 

    // Expand custom hook
    const { isExpand, handleIsExpand } = useExpand()
    // 

    // Update Form custom hook
    const { isUpdateForm, handleSetIsUpdateForm, handleCloseUpdateForm } = useUpdateForm()
    // 

    useEffect(() => {
        localStorage.setItem("DAYS", JSON.stringify(challenges))
    }, [challenges])

    function newDayObject(currentDate, index) {
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + index)
        const newDay = {
            id: crypto.randomUUID(),
            title: startFrom == "today" ? `day ${index + 1}` : `day ${index}`,
            date: newDate,
            isCompleted: false
        }

        return newDay
    }

    function makeNewday(currentDate) {
        // const newDate = new Date(currentDate.getTime() + ((24 * index) * 60 * 60 * 1000)).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "2-digit" })
        const newData = []
        if (startFrom == "today") {
            for (let index = 0; index < dayNumber; index++) {
                newData.push(newDayObject(currentDate, index))
            }
        }
        else {
            for (let index = 1; index <= dayNumber; index++) {
                newData.push(newDayObject(currentDate, index))
            }
        }

        return newData
    }

    const handleMakeChallenge = () => {
        const currentDate = new Date()
        const newChallenge = {
            id: crypto.randomUUID(),
            title: titleInput,
            challengeDays: makeNewday(currentDate)
        }

        setChallenges(prev => [newChallenge, ...prev])

        // we add this line the set select input to the last challenge we add
        setChallengesListInput(titleInput)
    }

    const handleResetDays = () => {
        setChallenges([])
    }

    const handleDeleteChallenge = (id) => {
        const newArray = challenges.filter(challenge => challenge.id != id)
        setChallenges(newArray)
        challengesListInput == "all" ? setChallengesListInput("all") : setChallengesListInput(newArray[0]?.title)
    }

    const handleIsCompleted = (challengeId, dayId) => {
        const newArray = challenges.map(challenge => {
            if (challenge.id == challengeId) {
                return {
                    ...challenge,
                    challengeDays: challenge.challengeDays.map(day => {
                        if (day.id == dayId) {
                            return { ...day, isCompleted: !day.isCompleted }
                        }
                        else {
                            return day
                        }
                    })
                }
            }
            else {
                return challenge
            }
        })

        setChallenges(newArray)
    }

    const handleUpdateChallenge = (e, id, newTitle) => {
        e.preventDefault()
        const newArray = challenges.map(challenge => {
            if (challenge.id == id) {
                return { ...challenge, title: newTitle }
            }
            else {
                return challenge
            }
        })

        setChallenges(newArray)

        // we add this line the set select input to the challenge that we edited
        challengesListInput == "all" ? setChallengesListInput("all") : setChallengesListInput(newTitle)
    }


    const values = {
        challenges,
        nowDate,
        handleIsCompleted,
        handleResetDays,
        handleMakeChallenge,
        handleDeleteChallenge,
        handleUpdateChallenge,

        challengesTitle,
        challengesListInput,
        handleChallengesListInput,

        // Filter
        startFrom,
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState,
        titleInput,
        handleTitleInput,

        // Dark Theme
        isDark,
        handleIsDark,

        // Modal
        modalRef,
        handleOpenModal,
        deleteModalRef,
        handleOpenDeleteModal,
        handleOpenDeleteOneChallengeModal,
        dialogDeleteRefs,

        // Sticky header
        isSticky,

        // Go Top Button
        isShowBtn,
        handleScrollToTopClick,

        // Expand
        isExpand,
        handleIsExpand,

        // Update form
        isUpdateForm,
        handleSetIsUpdateForm,
        handleCloseUpdateForm
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)