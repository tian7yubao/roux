import { Title } from "@/ui/title";

export function Roux() {
    return (
        <div className="py-20 pb-32 bg-black">
            <Title/>
            <ul className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 p-10">

                <li className="p-5 flex flex-col items-center gap-10">
                    <img src="/assets/roux/fb.png" alt=""/>
                    <h2 className="text-white text-xl md:text-2xl">FB [左桥]</h2>
                </li>

                <li className="p-5 flex flex-col items-center gap-10">
                    <img src="/assets/roux/sb.png" alt=""/>
                    <h2 className="text-white text-xl md:text-2xl">SB [右桥]</h2>
                </li>

                <li className="p-5 flex flex-col items-center gap-10">
                    <img src="/assets/roux/cmll.png" alt=""/>
                    <h2 className="text-white text-xl md:text-2xl">CMLL [四角]</h2>
                </li>

                <li className="p-5 flex flex-col items-center gap-10">
                    <img src="/assets/roux/lse.png" alt=""/>
                    <h2 className="text-white text-xl md:text-2xl">LSE [六棱]</h2>
                </li>

            </ul>
        </div>
    )
}