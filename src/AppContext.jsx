import { createContext, useContext, useEffect, useRef, useState } from "react";
import useFilter from "./hooks/useFilter";
import useDarkTheme from "./hooks/useDarkThem";
import useSticky from "./hooks/useSticky";
import useGoTopBtn from "./hooks/useGoTopBtn";


const AppContext = createContext(null)

export function AppContextProvider({ children }) {

    const [Days, setDays] = useState(() => {
        const localValue = localStorage.getItem("DAYS")
        if(localValue == null) return []

        return JSON.parse(localStorage.getItem("DAYS"))
    })
    const [nowDate, setNowDate] = useState(new Date())

    // Modal
    const modalRef = useRef()
    const deleteModalRef = useRef()

    const handleOpenModal = () => {
        if(dayNumber == "") {
            setFilterErrorState("error")
            return;
        }
        setFilterErrorState("")
        
        if(Days.length > 0)
        {
            modalRef.current.showModal()
        }
        else {
            handleMakeDays()
        }
    }

    const handleOpenDeleteModal = () => {
        deleteModalRef.current.showModal()
    }
    // End


    // Filter Custom hook 
    const {
        startFrom,
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState,
        setFilterErrorState,
    } = useFilter()
    // End

    // Dark theme custom hook
    const {isDark, handleIsDark} = useDarkTheme()
    // End

    // Sticky custom hook
    const {isSticky} = useSticky()
    // End

    // Go top button custom hook 
    const {isShowBtn, handleScrollToTopClick} = useGoTopBtn()
    // 

    useEffect(() => {
        localStorage.setItem("DAYS", JSON.stringify(Days))
    }, [Days])


    function makeNewday(index, currentDate) {
        // const newDate = new Date(currentDate.getTime() + ((24 * index) * 60 * 60 * 1000)).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "2-digit" })
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + index)
        const newDay = {
            id: crypto.randomUUID(),
            title: startFrom == "today" ? `day ${index + 1}` : `day ${index}`,
            date: newDate,
            isCompleted: false
        }
        setDays(prev => [...prev, newDay])
    }

    const handleMakeDays = () => {

        setDays([])
        const currentDate = new Date()
        if (startFrom == "today") {
            for (let index = 0; index < dayNumber; index++) {
                makeNewday(index, currentDate)
            }
        }
        else {
            for (let index = 1; index <= dayNumber; index++) {
                makeNewday(index, currentDate)
            }
        }
    }

    const handleResetDays = () => {
        setDays([])
    }

    const handleIsCompleted = (id) => {
        const newArray = Days.map(day => {
            if (day.id == id) {
                return { ...day, isCompleted: !day.isCompleted }
            }
            else {
                return day
            }
        })

        setDays(newArray)
    }



    const values = {
        Days,
        handleMakeDays,
        nowDate,
        handleIsCompleted,
        handleResetDays,

        // Filter
        startFrom,
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState,

        // Dark Theme
        isDark,
        handleIsDark,

        // Modal
        modalRef,
        handleOpenModal,
        deleteModalRef,
        handleOpenDeleteModal,

        // Sticky header
        isSticky,

        // Go Top Button
        isShowBtn,
        handleScrollToTopClick
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)