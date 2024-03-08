import { useEffect, useRef, useState } from "react"


export default function useFilter() {

    const [startFrom, setStartFrom] = useState("today")
    const [dayNumber, setDayNumber] = useState("")
    const [filterErrorState, setFilterErrorState] = useState("")

    const handleStartDayChange = (e) => {
        setStartFrom(e.target.value)
    }

    const handleDayNumberChange = (e) => {
        // const limit = 2
        // setDayNumber(e.target.value.slice(0, limit))
        setDayNumber(e.target.value)
    }
    
    return {
        startFrom, 
        handleStartDayChange,
        dayNumber,
        handleDayNumberChange,
        filterErrorState,
        setFilterErrorState, 
    }
}