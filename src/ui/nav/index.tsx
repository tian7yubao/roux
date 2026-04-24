export function Nav() {
    return (
        <nav className="bg-black px-5 md:text-xl lg:text-3xl duration-300">
            <div className="max-w-7xl mx-auto">
                <ul className="py-8 flex flex-col md:flex-row md:items-center gap-10 text-yellow-300">
                    <li><a href="">Logo Roux</a></li>
                    <li><a href="">FB [左桥]</a></li>
                    <li><a href="">SB [右桥]</a></li>
                    <li><a href="">CMLL [四角]</a></li>
                    <li><a href="">LSE [六棱]</a></li>
                    <li><a href="">EOLR</a></li>
                </ul>
            </div>
        </nav>
    )
}