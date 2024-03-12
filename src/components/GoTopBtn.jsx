import { useAppContext } from "../AppContext"


export default function GoTopBtn() {

    const { isShowBtn, handleScrollToTopClick } = useAppContext()

    return (
        <div className={`go-top-btn fixed bottom-0 right-3 group translate-y-full transition-all z-40 ${isShowBtn ? "!translate-y-0 !bottom-3" : ""}`}>
            <button onClick={handleScrollToTopClick} className={`rounded-full p-3 shadow-md text-white bg-blue-400 ${isShowBtn ? "gelatine": ""}`}>
                <div className="arrow-up-icon transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </div>
            </button>
        </div>
    )
}