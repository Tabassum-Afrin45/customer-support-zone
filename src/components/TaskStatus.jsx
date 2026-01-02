import { use, useState } from "react";
import ProgressTask from "./Banner"
import CustomerTicket from "./CustomerTicket";
import ProgressCard from "./TicketCard";
import { toast } from "react-toastify";

const TaskStatus=({promise})=>{
    const tickets= use(promise);
    // console.log(tickets)

    const[inProgressTask, setInProgressTask]=useState([])
    const handleTicket=(ticket)=>{
    toast("Task in Progress")
    console.log(ticket)
    const newInProgressTask=[...inProgressTask,ticket]
    setInProgressTask(newInProgressTask)
   }
    console.log(inProgressTask)
    
    return(
        <div>
           <ProgressTask totalInProgressTask={inProgressTask.length}></ProgressTask>

        <section className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="col-span-1 lg:col-span-9 font-semibold text-xl">Customer Tickets
    
          <div className="space-y-5 text-md">
            {tickets.map((item) => (
            <CustomerTicket handleTicket={handleTicket} key={item.id} ticket={item}></CustomerTicket>  
            ))}
            </div>
           </div>
           <div className="col-span-1 lg:col-span-3 space-y-8">
            <div>
                <h2 className="font-semibold text-xl mb-2">Task Status</h2>
                <div className="shadow space-y-5">
                   {
                    inProgressTask.length===0?(
                    <p className="my-2 text-md text-gray-500">Select a ticket to add to Task Status</p>
                ):(
                    inProgressTask.map((ticket)=>(
                        <ProgressCard key={ticket.id} ticket={ticket}></ProgressCard>
                    ))
                   )}
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl mb-2 ">Resolved Task</h2>
                <div className="shadow space-y-5">
                   {
                    <p className="my-2 text-md text-gray-500">No resolved tasks yet.</p>
                   }
                </div>
            </div>
         </div>
        </section>
        </div>
    )
}
export default TaskStatus 