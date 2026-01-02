import { Suspense } from "react";
import Navbar from "./components/Navbar"
import TaskStatus from "./components/TaskStatus";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
const loadTickets=()=>fetch("/tickets.json").then((res)=>res.json());
const App=()=>{
  const ticketsPromise=loadTickets();
  return <div>
    <header className="w-11/12 mx-auto my-3">
      <Navbar></Navbar>
    </header>
    <div className="bg-gray-100 h-full">
      <section className="w-11/12 mx-auto pt-12 pb-2">
      <Suspense fallback={"Loading..."}>
        <TaskStatus promise={ticketsPromise}></TaskStatus>
      </Suspense>
      </section>
      <ToastContainer></ToastContainer>
    </div>
    <Footer></Footer>
  </div>   
}
export default App
