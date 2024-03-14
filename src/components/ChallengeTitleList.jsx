import { useAppContext } from "../AppContext"


export default function ChallengeTitleList() {


    const { challengesTitle, challengesListInput, handleChallengesListInput } = useAppContext()

    return (

        <div className="border p-2 bg-gray-100 dark:bg-[#182631] dark:border-border-secondry">
            <div className={`flex items-center flex-col border border-transparent justify-between bg-white py-2 px-3 shadow-sm dark:bg-filter-input-dark`}>
                <p className="font-semibold uppercase mr-3 tracking-wider text-gray-500 text-sm dark:text-dark-text-secondry">my challenges ({challengesTitle.length})</p>
                <select className="w-full text-center h-10 px-3 uppercase font-semibold tracking-wider bg-transparent dark:text-white" value={challengesListInput} onChange={handleChallengesListInput} name="" id="">
                    <option className="dark:bg-dark" value="all">all</option>
                    {challengesTitle.map((title, index) => {
                        return (
                            <option className="dark:bg-dark" key={index} value={title}>{title}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}