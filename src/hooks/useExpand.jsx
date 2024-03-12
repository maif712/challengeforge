import { useState } from "react"


export default function useExpand() {

    const [isExpand, setIsExpand] = useState(false)

    const handleIsExpand = () => {
        setIsExpand(prev => !prev)
    }

    return {
        isExpand, 
        handleIsExpand
    }
}