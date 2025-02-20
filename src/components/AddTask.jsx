import useAxiosPublic from "../hooks/useAxios"

export default function AddTask() {
    const axiosPublic = useAxiosPublic()
    const  handleAdd =()=>{
        document.getElementById('my_modal_3').showModal()
    }

  return (
    <button onClick={handleAdd} className="btn">Add Task</button>
  )
}
