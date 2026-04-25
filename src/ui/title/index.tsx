"use client"

import { motion, stagger, type Variants } from "motion/react";

export function Title() {

    const letters: string[] = [
        "桥",
        "式",
        "中",
        "文",
        "网",
    ];

    const container: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: stagger(0.03)
            }
        },
    };
    const item: Variants = {
        initial: {
            opacity: 0,
            filter: "blur(6px)",
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)",
        },
    };

    return (
        <div className="mt-0.5 py-12 md:py-20 lg:py-32 px-5 bg-mauve-950 flex justify-center">
            <motion.h2 className="flex gap-5 justify-center px-12 md:px-20 lg:px-32 py-5 shadow-white shadow-lg md:hadow-2xl rounded-lg -skew-3"
                       variants={ container }
                       initial={ "initial" }
                       animate={ "animate" }>
                {
                    letters.map((letter: string, i: number) => (
                        <motion.span className="font-bold text-white"
                                     key={ i }
                                     variants={ item }>
                            <span className="text-2xl md:text-4xl lg:text-6xl duration-300">
                                 { letter }
                            </span>
                        </motion.span>
                    ))
                }
            </motion.h2>
        </div>
    )
}