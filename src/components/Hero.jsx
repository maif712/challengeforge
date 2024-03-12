

export default function Hero() {
    return (
        <section className="bg-[#051d39] mb-6 pt-28 py-7 dark:bg-[#182631]">
            <div className="layout-wrapper">
                <div className="grid gap-4">
                    <h1 className="hero__title font-bold text-center text-3xl text-hero-title leading-10 md:text-left md:max-w-[40%]">Embark on your journey to self imporovment with <span className="uppercase border text-[0.7em] px-4 py-1 rounded-full tracking-wider">challenge tracker</span></h1>
                    <p className="hero__para text-center text-dark-text-secondry text-sm leading-6 md:text-left md:max-w-[40%]">Stay organized and on track with challenge tracker. This intuitive app allows you to create daily plans from 1 to 30 days. Simply check off tasks as you complete them. Whether you're aiming to develop new habits, improve your fitness, or boost your productivity, Challenge Tracker provides you the tools you need to track your progress.</p>
                </div>
            </div>
        </section>
    )
}