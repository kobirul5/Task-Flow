import AddTask from "../../components/AddTask";
import HomeNav from "../../components/HomeNav";
import TaskModal from "../../components/TaskModal";

export default function Home() {
  return (
    <div>
      <HomeNav />
      <div className="flex justify-between items-center">
        <div className="bg-gray-200 w-full p-5 h-screen">
            <AddTask></AddTask>
            <TaskModal/>
        </div>
        <div className="bg-gray-300 w-full p-5 h-screen"> Progress </div>
        <div className="bg-gray-200 w-full p-5 h-screen"> Done </div>
      </div>
    </div>
  )
}
