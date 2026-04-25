interface Route {
    title: string;
    path: string;
    src: string;
}

export function Router() {

    const routes: Route[] = [
        {
            title: "左桥",
            path: "/fb",
            src: "/assets/fb.png",
        },
        {
            title: "右桥",
            path: "/sb",
            src: "/assets/sb.png",
        },
        {
            title: "四角",
            path: "/cmll",
            src: "/assets/cmll.png",
        },
        {
            title: "六棱",
            path: "/lse",
            src: "/assets/lse.png",
        },
        {
            title: "六棱进阶",
            path: "/eolr",
            src: "/assets/eolr.png",
        },
    ];

    return (
        <div className="bg-[#151519] px-5">
            <div className="max-w-7xl mx-auto pb-20">
                <ul className="grid gap-10 grid-cols-1 md:grid-cols-5">
                    {
                        routes.map(({ title, path, src }: Route, i: number) => (
                            <li key={ i }>
                                <a className="block p-5 max-w-54 mx-auto relative group"
                                   href={ path }>
                                    <img className="group-hover:scale-95 duration-300"
                                         src={ src }
                                         alt=""/>
                                    <span className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:bg-[#151519]/70 duration-300">
                                        <span className=" text-transparent group-hover:text-cyan-400 text-4xl font-bold font-zcool duration-300">
                                            { title }
                                        </span>
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}