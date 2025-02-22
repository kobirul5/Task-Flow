
import TaskModal from "./TaskModal";
import useAxiosPublic from "../hooks/useAxios";

export default function TaskCard({ task }) {
 const axiosPublic = useAxiosPublic()

const handleDelete =(id)=>{
  
  axiosPublic.delete(`/task-delete/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  return (
    <div className="card bg-base-100 shadow-xl m-4 " draggable>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Category: <span className="text-green-600">{task.category}</span></p>
        <p className="text-sm text-gray-500">Date: {new Date(task.timestamp).toLocaleDateString()}</p>
        <div className="card-actions justify-end">
          <button onClick={() => document.getElementById(`task-${task._id}`).showModal()} className="btn  bg-transparent border-green-700">Edit</button>
          {/* <TaskModal task={task}/> */}
          <button onClick={()=>{handleDelete(task?._id)}} className="btn bg-transparent border-green-700" draggable="false">Delete</button>
        </div>
      </div>

      {/* modal */}
      <TaskModal task={task}></TaskModal>
    

    </div>
  )
}
