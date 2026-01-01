import { use } from "react";
import ProgressTask from "./Banner"

const TaskStatus=({promise})=>{
    const tickets= use(promise);
    console.log(tickets)
    return(
        <div>
           <ProgressTask></ProgressTask>
        </div>
    )
}
export default TaskStatus