import { type Roux } from "@/ui/nav";

export function Roux() {

    const roux: Roux[] = [
        {
            title: "FB [左桥]",
            src: "/assets/fb.png",
            href: "/fb",
        },
        {
            title: "SB [右桥]",
            src: "/assets/sb.png",
            href: "/sb",
        },
        {
            title: "CMLL [四角]",
            src: "/assets/cmll.png",
            href: "/cmll",
        },
        {
            title: "LSE [六棱]",
            src: "/assets/lse.png",
            href: "/lse",
        },
    ];

    return (
        <div className="px-10 pb-20 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        roux.map(({ title, src, href }: Roux, i: number) => (
                            <a className="flex flex-col items-center gap-5 p-5 hover:shadow-xl shadow-white rounded-md duration-300"
                               href={ href }
                               key={ i }>
                                <img src={ src } alt=""/>
                                <span className="text-white md:text-2xl lg:text-3xl">{ title }</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}