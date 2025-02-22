import { useEffect, useState } from "react";
import HomeNav from "../../components/HomeNav";
import TaskCard from "../../components/TaskCard";
import useAxiosPublic from "../../hooks/useAxios";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    axiosPublic
      .get("/all-tasks")
      .then((res) => setTasks(res.data))
      .catch((error) => console.log(error));
  }, []);

  const toDoData = tasks?.filter((i) => i?.category === "To-Do");
  const inProgressData = tasks?.filter((i) => i?.category === "In Progress");
  const doneData = tasks?.filter((i) => i?.category === "Done");

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const newCategory = over.id
    if (active.id !== over.id) {
      const activeTask = tasks.find((task) => task._id === active.id);
      console.log(activeTask, "dddddd", newCategory)

    
      const updatedTasks = tasks.map((task) => {
        if (task._id === active.id) {
          return { ...task, category: over.id };
        }
        console.log(task)
        return task;
      });

      setTasks(updatedTasks);
      console.log(tasks)

      // ToDo: Update in backend
      const newTask = {
        title: activeTask.title,
        description: activeTask.description,
        category: newCategory,
        email: activeTask.email,
        timestamp: new Date().toISOString(),
      }
      axiosPublic.put(`/task-update/${active.id}`, newTask)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });;
    }
  };

  return (
    <div>
            <div className="hidden md:block"><HomeNav /></div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex justify-between items-start flex-wrap lg:grid grid-cols-3">
          <Column id="To-Do" title="To-Do">
            {toDoData.map((task) => (
              <DraggableItem key={task._id} id={task._id}>
                <TaskCard 
                
                task={task} />
              </DraggableItem>
            ))}
          </Column>

          <Column id="In Progress" title="In Progress">
            {inProgressData.map((task) => (
              <DraggableItem key={task._id} id={task._id}>
                <TaskCard  task={task} />
              </DraggableItem>
            ))}
          </Column>

          <Column id="Done" title="Task Done">
            {doneData.map((task) => (
              <DraggableItem key={task._id} id={task._id}>
                <TaskCard task={task} />
              </DraggableItem>
            ))}
          </Column>
        </div>
      </DndContext>
    </div>
  );
}

// Draggable Item Component
const DraggableItem = ({ id, children, isHovering }) => {
  
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });
    const style = {
      transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
      opacity: isDragging ? 0.5 : 1,
      cursor: isHovering ? "default" : "grab", // Disable grab on hover
    };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

// Droppable Column Component
const Column = ({ id, title, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}

      className="bg-gray-200 w-full p-5 max-h-[calc(100vh-128px)] min-h-[calc(100vh-128px)] overflow-y-scroll scrollbar-hide"
    >
      <h2 className={`
        font-bold text-lg mb-3 btn w-full lg:hidden 
        ${title === "To-Do" && "bg-green-400"}
        ${title === "In Progress" && "bg-green-700"}
        ${title === "Task Done" && "bg-green-900"}
         `}>{title}</h2>
      {children}
    </div>
  );
};
