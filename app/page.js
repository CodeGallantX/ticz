import Header from "./components/Header"
import TicketForm from "./components/TicketForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02191D]">
      <Header />
      <div className="flex items-center justify-center pt-40">
      <TicketForm />
      </div>
    </div>
  );
}
