import "./tailwind.css";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { Nav } from "@/ui/nav";

// import { Orbitron } from "next/font/google";
//
// const orbiter = Orbitron({
//     subsets: [ "latin" ]
// });

export const metadata: Metadata = {
    title: "Roux",
    description: "三阶魔方速拧桥式方法指导教程",
};

interface RootLayoutProps {
    children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={ "scroll-smooth"}>
                <Nav/>
                { children }
            </body>
        </html>
    )
}
