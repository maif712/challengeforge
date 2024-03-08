

export default function Footer() {
    return (
        <footer className="bg-background-secondry py-7 mt-auto text-clr-secondry dark:bg-dark-footer dark:text-dark-text-secondry">
            <div className="layout-wrapper">
                <div className="grid gap-5">
                    <p className="flex items-center gap-1 justify-center capitalize font-mono text-sm">made with <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </span> by
                        <span className="uppercase bg-clr-secondry text-white px-3 py-1 rounded-[4px] tracking-widest dark:text-[#313131] dark:bg-dark-text-secondry">maif</span>, © 2024</p>
                    <div className="flex justify-center pt-5 border-t border-t-dark-text-secondry dark:border-t-border-primary md:justify-start">
                        <a href={`${import.meta.env.VITE_BASE_URL}`} className={`uppercase font-bold text-[#292929] tracking-wide border-2 py-2 px-3 rounded-full transition-color dark:text-dark-text-secondry dark:border-border-secondry`}>challenge tracker</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}