import useAxiosPublic from "../hooks/useAxios"

export default function AddTask() {
    const axiosPublic = useAxiosPublic()
    const  handleAdd =()=>{
        document.getElementById('my_modal_3').showModal()
    }

  return (
    <button onClick={handleAdd} className="btn border border-white bg-transparent text-white font-bold hover:bg-green-950 hover:text-white hover:border-0">Add Task</button>
  )
}
