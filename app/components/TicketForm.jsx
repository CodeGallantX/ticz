import tickets from "../data/tickets.json"

const TicketForm = () => {
    return (
        <div className="p-6 border border-[#197686] rounded-xl w-full max-w-lg">
            <div>
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl font-bold mb-4">Ticket Selection</h2>
                    <span>Step 1/3</span>
                </div>
                <div id="progress-bar" className="relative">
                    <span className="w-full max-w-lg h-6 bg-[#0e464f]"></span>
                    <span className="w-1/3 h-6 bg-[#24a0b5]"></span>
                </div>
            </div>
            <div className="p-6 border border-[#197686] rounded-lg">
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <h1 className="text-4xl">Techember fest  ""25</h1>
                    <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <span>📍 [Event Location]</span><span>| |</span><span>March 15, 2025 | 7:00 PM</span>
                    </div>
                </div>
            </div>
            <hr className="w-full h-10 bg-[#0e464f]" />
            <div className="bg-[#0e464f] p-4 rounded-xl">
                {tickets.map(ticket, index) = (
                    <div key={index} className="border border-[#197686] rounded-lg p-4">
                        <div>
                            <h3 className="uppercase">{ticket.type}</h3>
                            <p>{ticket.slots}</p>
                        </div>
                        <span className="bg-[#0e464f] border border-[#197686] p-4">{ticket.price}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TicketForm