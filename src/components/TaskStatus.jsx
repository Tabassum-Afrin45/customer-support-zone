import { use } from "react";
import ProgressTask from "./Banner"
import CustomerTicket from "./CustomerTicket";

const TaskStatus=({promise})=>{
    const tickets= use(promise);
    console.log(tickets)
    return(
        <div>
           <ProgressTask></ProgressTask>
        <section className="w-11/12 mx-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
           <div className="col-span-1 lg:col-span-9 font-semibold text-xl">Customer Tickets
    
          <div className="space-y-5 text-md">
            {tickets.map((item) => (
            <CustomerTicket key={item.id} ticket={item}></CustomerTicket>  
            ))}
            </div>
           </div>
           <div className="col-span-1 lg:col-span-3 font-semibold text-xl">
            <div>Task Status</div>
            <div>Resolved Task</div>
            </div>
        </section>
        </div>
    )
}
export default TaskStatus 