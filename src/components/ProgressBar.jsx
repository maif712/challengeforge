import { useAppContext } from "../AppContext"


export default function ProgressBar({value}) {

    const {isDark} = useAppContext()
    return (
        <div style={{background: `conic-gradient(${isDark ? "#2795c3" : "#75b800"} ${value}%, ${isDark ? "#27282c" : "#e5e5e5"} 0%)`}} className="progress" role="progressbar" aria-valuenow={Math.trunc(value)}></div>
    )
}