import { Calendar } from "lucide-react";

const CustomerTicket = ({ticket,handleTicket}) => {
// console.log(ticket)
  return (
    <div onClick={()=>handleTicket(ticket)} className="p-5 rounded-xl shadow-sm relative space-y-3 bg-white mt-3">
      {/* Ticket Heading */}
      <h2 className="flex items-center justify-between">
        <p>{ticket.title} </p>
        
      <p className=" bg-amber-400 p-2 inline-block rounded-3xl text-sm">
        {ticket.status}
      </p>
    </h2>

      {/* Description*/}
      <p className="text-[16px] text-gray-500 font-normal">
        {ticket.description}
      </p>
      {/* others info */}
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-sm font-medium text-gray-500">#{ticket.id}</p>
          <p className="text-sm text-amber-300">{ticket.priority}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-sm font-light">{ticket.customer}</p>
          <p className="text-sm font-light flex flex-row gap-0.5"><Calendar/>{ticket.createdAt}</p>
       
        </div>

      </div>

    </div>
  );
};

export default CustomerTicket;