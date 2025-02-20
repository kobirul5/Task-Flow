import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask";
import HomeNav from "../../components/HomeNav";
import TaskModal from "../../components/TaskModal";
import useAxiosPublic from "../../hooks/useAxios";
import TaskCard from "../../components/TaskCard";

export default function Home() {
  const [tasks, setTask] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(()=>{
    axiosPublic.get('/all-tasks')
    .then((res)=>setTask(res.data))
    .catch((error)=>console.log(error))
  },[])

  const toDoData= tasks?.filter((i)=> i?.category === "To-Do")
  const inProgressData= tasks?.filter((i)=> i?.category === "In Progress")
  const doneData= tasks?.filter((i)=> i?.category === "Done")


  return (
    <div>
      <HomeNav />
      <div className="flex justify-between items-center">
        <div className="bg-gray-200 w-full p-5 h-screen overflow-y-scroll scrollbar-hide">
          <AddTask></AddTask>
         {
          toDoData?.map((task,idx)=> <TaskCard task={task}/>)
         }
          <TaskModal />
        </div>
        <div className="bg-gray-300 w-full p-5 h-screen overflow-y-scroll scrollbar-hide">  
          {
          inProgressData?.map((task,idx)=> <TaskCard task={task}/>)
         } </div>
        <div className="bg-gray-200 w-full p-5 h-screen overflow-y-scroll scrollbar-hide"> 
        {
          doneData?.map((task,idx)=> <TaskCard task={task}/>)
         }
           </div>
      </div>
    </div>
  )
}
