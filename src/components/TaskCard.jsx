import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TaskModal from "./TaskModal";

export default function TaskCard({ task }) {


  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [category, setCategory] = useState(task?.category || "To-Do");

  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setCategory(task?.category || "To-Do");
  }, [task]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title is required");
      return;
    }
    if (title.length > 50) {
      alert("Title cannot exceed 50 characters");
      return;
    }
    if (description.length > 200) {
      alert("Description cannot exceed 200 characters");
      return;
    }
    const email = user?.email
    const newTask = {
      title,
      description,
      category,
      email,
      timestamp: new Date().toISOString(),
    };
    axiosPublic.post("/task-post", newTask)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Category: <span className="text-green-600">{task.category}</span></p>
        <p className="text-sm text-gray-500">Date: {new Date(task.timestamp).toLocaleDateString()}</p>
        <div className="card-actions justify-end">
          <button onClick={() => document.getElementById(`task-${task._id}`).showModal()} className="btn outline-1 bg-transparent outline-green-700">Edit</button>
          {/* <TaskModal task={task}/> */}
          <button className="btn outline-1 bg-transparent outline-green-700">Delete</button>
        </div>
      </div>

      {/* modal */}
      <TaskModal task={task}></TaskModal>
    

    </div>
  )
}
