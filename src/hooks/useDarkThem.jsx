import { useEffect, useState } from "react"

export default function useDarkTheme() {

    const [isDark, setIsDark] = useState(() => {
        const localValue = localStorage.getItem("DARKTHEME")
        if(localValue == null) false

        return JSON.parse(localStorage.getItem("DARKTHEME"))
    })

    useEffect(() => {
        localStorage.setItem("DARKTHEME", JSON.stringify(isDark))
        const mainHTML = document.querySelector("html")
        isDark ? mainHTML.classList.add("dark") : mainHTML.classList.remove("dark")
    }, [isDark])


    const handleIsDark = () => {
        setIsDark(prev => !prev)
    }


    return {isDark, handleIsDark}
}