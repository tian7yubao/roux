"use client"

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/tailwind";

type Cmll = "O" | "H" | "Pi" | "U" | "T" | "L" | "S" | "As";

export default function Layout({ children }: { children: Readonly<ReactNode> }) {

    const [ selected, setSelected ] = useState<Cmll>("O");

    useEffect(() => {
        document.title = "CMLL";
    });

    const CASE: Cmll[] = [ "O", "H", "U", "Pi", "T", "L", "S", "As" ];

    return (
        <div className="bg-[#151519]">
            <div className="max-w-7xl mx-auto py-16 px-5">
                <h1 className="text-center font-zcool text-cyan-400">
                    <span className="text-3xl md:text-4xl lg:text-5xl duration-300">CMLL (42)</span>
                </h1>
                <ul className="flex justify-between md:justify-start gap-1 md:gap-5 lg:gap-10 duration-300 my-20 font-zcool">
                    {
                        CASE.map((c: Cmll) => (
                            <li key={ c }>
                                <button
                                    className={ cn("px-3 md:px-5 py-2 cursor-pointer relative hover:bg-[#29292a] rounded-md duration-300", selected === c && "") }
                                    onClick={ () => setSelected(c) }>
                                    <span className="text-2xl md:text-3xl text-cyan-400 duration-300">{ c }</span>
                                    <AnimatePresence>
                                        {
                                            selected === c && (
                                                <motion.span className="absolute left-1/2 -translate-x-1/2 trans bottom-0 bg-cyan-400 w-[120%] h-0.5"
                                                             layoutId="underline"/>
                                            )
                                        }
                                    </AnimatePresence>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    { children }
                </div>
            </div>
        </div>
    )
}
