"use client"

import { motion, stagger, Variants } from "motion/react";

export function Title() {

    const container: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: stagger(0.02),
            }
        }
    }

    const item: Variants = {
        initial: {
            opacity: 0,
            y: -20,
            filter: "blur(6px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
        }
    }

    return (
            <div className="my-5">
                <motion.h1 className="md:text-3xl lg:text-5xl duration-300 text-white text-center flex gap-5 justify-center"
                           variants={ container }
                           initial={ "initial" }
                           animate={ "animate" }>
                    <motion.span variants={ item }>R</motion.span>
                    <motion.span variants={ item }>o</motion.span>
                    <motion.span variants={ item }>u</motion.span>
                    <motion.span variants={ item }>x</motion.span>
                    <motion.span variants={ item }>M</motion.span>
                    <motion.span variants={ item }>e</motion.span>
                    <motion.span variants={ item }>t</motion.span>
                    <motion.span variants={ item }>h</motion.span>
                    <motion.span variants={ item }>o</motion.span>
                    <motion.span variants={ item }>d</motion.span>

                </motion.h1>
            </div>
    )
}