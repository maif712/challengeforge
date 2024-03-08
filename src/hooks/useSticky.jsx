import { useEffect, useState } from "react"



export default function useSticky() {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const mainHeader = document.querySelector("header")
        const mainHeaderHeight = mainHeader.offsetHeight / 2

        const handleSticky = () => {
            if(window.scrollY > mainHeaderHeight) {
                setIsSticky(true)
            }
            else if(window.scrollY == 0) {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleSticky)

        return () => removeEventListener("scroll", handleSticky)
        
    }, [])

    return {isSticky}
}