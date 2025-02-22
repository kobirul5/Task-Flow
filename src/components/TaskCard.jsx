
import TaskModal from "./TaskModal";
import useAxiosPublic from "../hooks/useAxios";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

export default function TaskCard({ task }) {
  const axiosPublic = useAxiosPublic()
  const location = useLocation()

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosPublic.delete(`/task-delete/${id}`)
        .then(function (response) {
          if(response.data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
          
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    });
   
  }



  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Category: <span className="text-green-600">{task.category}</span></p>
        <p className="text-sm text-gray-500">Date: {new Date(task.timestamp).toLocaleDateString()}</p>
        {
          location.pathname !== "/" && <div className="card-actions justify-end">
          <button onClick={() => document.getElementById(`task-${task._id}`).showModal()} className="btn outline-1 bg-transparent outline-green-700">Edit</button>
          {/* <TaskModal task={task}/> */}
          <button onClick={() => handleDelete(task?._id)} className="btn outline-1 bg-transparent outline-green-700 sticky right-0">Delete</button>
        </div>
        }
      </div>
      {/* modal */}
      <TaskModal task={task}></TaskModal>


    </div>
  )
}
