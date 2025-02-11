
const Header = () => {
    return (
        <header className="fixed w-[80%] top-8 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between px-4 py-3 bg-[#05252C]/40 backdrop-blur-md border border-[#197686] bg-transparent rounded-2xl">
            <div>
                <img src="" alt="" />
                <span className="text-white font-bold text-xl">ticz</span>
            </div>
            <nav>
                <ul className="flex flex-row items-center justify-center text-white space-x-6">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">My Tickets</a></li>
                    <li><a href="#">About Project</a></li>
                </ul>
            </nav>
            <button className="bg-white rounded-md p-4 text-black">
                MY TICKETS
            </button>

        </header>
    )
}

export default Header