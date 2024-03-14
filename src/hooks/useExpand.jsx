import { useState } from "react"


export default function useExpand() {

    const [isExpand, setIsExpand] = useState(false)

    const handleIsExpand = () => {
        setIsExpand(prev => !prev)
    }

    const handleSetIsExpandToFalse = () => {
        setIsExpand(false)
    }

    return {
        isExpand, 
        handleIsExpand,
        handleSetIsExpandToFalse
    }
}