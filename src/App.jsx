import { Suspense } from "react";
import Navbar from "./components/Navbar"
import TaskStatus from "./components/TaskStatus";
const loadTickets=()=>fetch("/tickets.json").then((res)=>res.json());
const App=()=>{
  const ticketsPromise=loadTickets();
  return <div>
    <header className="w-11/12 mx-auto my-3">
      <Navbar></Navbar>
    </header>
    <div className="bg-gray-100 h-200">
      <section className="w-11/12 mx-auto py-12">
      <Suspense fallback={"Loading..."}>
        <TaskStatus promise={ticketsPromise}></TaskStatus>
      </Suspense>
      </section>
    </div>
  </div>   
}
export default App
