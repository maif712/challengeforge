import { useEffect, useState } from "react"



export default function useGoTopBtn() {

    const [isShowBtn, setIsShowBtn] = useState(false)

    useEffect(() => {
        const checkScrollPosition = () => {
            window.scrollY > 320 ? setIsShowBtn(true) : setIsShowBtn(false)
        }

        window.addEventListener("scroll", checkScrollPosition)

        return () => window.removeEventListener("scroll", checkScrollPosition)
    }, [])

    const handleScrollToTopClick = () => {
        const durration = 700
        const startPosition = window.scrollY
        const startTime = performance.now()

        function easeOutQuad(t) {
            return t * (2 - t)
        }


        function animateScroll(currentTime) {

            const elapsedTime = currentTime - startTime

            const progress = Math.min(elapsedTime / durration, 1)
            const easedProgress = easeOutQuad(progress)


            window.scrollTo(0, startPosition * (1 - easedProgress))

            if (progress < 1) {
                requestAnimationFrame(animateScroll)
            }
        }
        requestAnimationFrame(animateScroll)
    }

    return { isShowBtn, handleScrollToTopClick }
}