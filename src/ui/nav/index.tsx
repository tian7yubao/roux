export interface Roux {
    title: string;
    src: string;
    href: string;
}

export function Nav() {

    const roux: Roux[] = [
        {
            title: "FB",
            src: "/assets/fb.png",
            href: "/fb",
        },
        {
            title: "SB",
            src: "/assets/sb.png",
            href: "/sb",
        },
        {
            title: "CMLL",
            src: "/assets/cmll.png",
            href: "/cmll",
        },
        {
            title: "LSE",
            src: "/assets/lse.png",
            href: "/lse",
        },
        {
            title: "EOLR",
            src: "/assets/eolr.png",
            href: "/eolr",
        },
    ];

    return (
        <nav className="bg-black px-5">
            <div className="max-w-7xl mx-auto py-5 font-bold">
                <div className="flex flex-row items-center justify-around md:justify-between">

                    <a className="flex items-center gap-2 w-fit hover:translate-x-2 duration-300" href="/">
                        <img className="size-12" src="/assets/logo.png" alt=""/>
                        <span className="text-white text-2xl">Roux</span>
                    </a>

                    <ul className="flex flex-col md:flex-row gap-5">
                        {
                            roux.map(({ title, src, href }: Roux, i: number) => (
                                <li className="p-2 hover:bg-rose-500 duration-300" key={ i }>
                                    <a className="flex items-center gap-1" href={ href }>
                                        <img className="size-10" src={ src } alt=""/>
                                        <span className="text-white md:text-xl duration-300">{ title }</span>
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