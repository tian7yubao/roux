export function Nav() {

    const steps: string[] = [
        "fb",
        "sb",
        "cmll",
        "lse",
        "eolr",
    ];

    return (
        <nav className="bg-[#151519] font-zcool sticky top-0 z-50 border-2 border-b-[#29292a]">
            <div className="max-w-7xl mx-auto p-5">

                <div className="flex flex-col md:flex-row items-center gap-5">
                    <a className="flex items-center gap-5" href="/">
                        <img className="size-16" src="/assets/logo.png" alt=""/>
                        <span className="text-cyan-400 font-bold text-2xl">Roux 桥式</span>
                    </a>
                    <ul className="flex text-xl items-center gap-2 md:gap-5 md:ml-auto">
                        {
                            steps.map((step: string, i: number) => (
                                <li key={ i }>
                                    <a className="text-white text-xl px-6 py-3 hover:bg-[#29292a] rounded-xl" href={ step }>
                                        { step.toUpperCase() }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </nav>
    )
}