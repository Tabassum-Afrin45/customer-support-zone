import { toast } from "react-toastify";

const ProgressCard = ({ticket}) => {

  return (
    <div className="rounded-sm p-5 bg-white">
      <h3 className="text-md font-medium mb-2">
        {ticket.title}
      </h3>
   {/* Button */}
      <button onClick={()=>toast.success("Task Completed!")} className="px-6 mt-3 py-1 text-md cursor-pointer rounded-md w-full bg-green-600 text-white">
        Complete
      </button>
    </div>
  );
};

export default ProgressCard ;