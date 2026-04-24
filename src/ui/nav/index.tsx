import { Title } from "@/ui/title";

export function Nav() {
    return (
        <nav className="bg-black px-5 md:text-xl lg:text-2xl duration-300 mb-px">
            <div className="max-w-7xl mx-auto flex items-center justify-around md:justify-between">

                <ul className="flex flex-col md:flex-row md:items-center gap-15 text-white font-bold">
                    <li className="flex items-center gap-2">
                        <img className="size-12" src="/assets/logo.png" alt=""/>
                        <a href="">Roux</a>
                    </li>
                </ul>

                <ul className="py-5 flex flex-col md:flex-row md:items-center gap-8 text-white">
                    <li className="flex items-center gap-2">
                        <img className="size-8" src="/assets/fb.png" alt=""/>
                        <a href="">FB</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="size-8" src="/assets/sb.png" alt=""/>
                        <a href="">SB</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="size-8" src="/assets/cmll.png" alt=""/>
                        <a href="">CMLL</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="size-8" src="/assets/lse.png" alt=""/>
                        <a href="">LSE</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="size-8" src="/assets/eolr.png" alt=""/>
                        <a href="">EOLR</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}