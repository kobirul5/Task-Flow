import { useEffect, useState } from "react";
import HomeNav from "../../components/HomeNav";
import TaskCard from "../../components/TaskCard";
import useAxiosPublic from "../../hooks/useAxios";


export default function EditDeleteTask() {
    const [tasks, setTasks] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        axiosPublic
            .get("/all-tasks")
            .then((res) => setTasks(res.data))
            .catch((error) => console.log(error));
    }, [tasks]);
    const toDoData = tasks?.filter((i) => i?.category === "To-Do");
    const inProgressData = tasks?.filter((i) => i?.category === "In Progress");
    const doneData = tasks?.filter((i) => i?.category === "Done");
    return (
        <div>
            <HomeNav />
            <div className="flex justify-between items-start scrollbar-hide flex-wrap lg:grid grid-cols-3 overflow-y-scroll">
                <div className="bg-gray-200 max-h-[calc(100vh-128px)] w-full p-5 h-screen overflow-y-scroll scrollbar-hide">
                    {
                        toDoData?.map((task, idx) => <TaskCard key={idx} task={task} />)
                    }
                </div>
                <div className="bg-gray-300 max-h-[calc(100vh-128px)] w-full p-5 h-screen overflow-y-scroll scrollbar-hide">
                    {
                        inProgressData?.map((task, idx) => <TaskCard key={idx} task={task} />)
                    } </div>
                <div className="bg-gray-200 max-h-[calc(100vh-128px)] w-full p-5 h-screen overflow-y-scroll scrollbar-hide">
                    {
                        doneData?.map((task, idx) => <TaskCard key={idx} task={task} />)
                    }
                </div>
            </div>
        </div>
    )
}
