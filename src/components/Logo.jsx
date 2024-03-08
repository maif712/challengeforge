
export default function Logo({isSticky}) {

    return (
        <a href={`${import.meta.env.VITE_BASE_URL}`} className={`uppercase font-bold text-hero-title tracking-wide border-2 py-2 px-3 rounded-full transition-color ${isSticky ? "!text-[#292929] dark:!text-dark-text-secondry" : ""} dark:text-dark-text-secondry dark:border-border-secondry`}>challenge tracker</a>
    )
}