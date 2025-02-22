import React, { useContext, useState } from 'react'
import useAxiosPublic from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthProvider';

export default function TaskModal({task}) {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const [title, setTitle] = useState(task?.title ||"");
    const [description, setDescription] = useState(task?.description || "");
    const [category, setCategory] = useState(task?.category ||"To-Do");


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
        axiosPublic.put(`/task-update/${task?._id}`, newTask)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    return (
        <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={`task-${task._id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        {/* ----------------Form------------------ */}
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-lg mx-auto p-4 bg-white "
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                Update Task
                            </h2>

                            <div className="mb-4">
                                <label className="block text-gray-700">Title *</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    maxLength={50}
                                    required
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter task title"
                                />
                                <p className="text-sm text-gray-500">{title.length}/50 characters</p>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    maxLength={200}
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter task description (optional)"
                                ></textarea>
                                <p className="text-sm text-gray-500">
                                    {description.length}/200 characters
                                </p>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="To-Do">To-Do</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-900 border hover:border-green-900 font-semibold text-white p-2 rounded-lg hover:bg-transparent  transition duration-200 hover:text-black"
                            >
                               Add Task
                            </button>

                            {/* ------------------------------------ */}
                        </form>
                    </div>
                </div>
            </dialog></div>
    )
}
