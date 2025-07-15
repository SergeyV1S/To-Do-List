import { toast } from "sonner";

import { useTaskStore } from "../model";
import type { ITask } from "../types";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks, deleteTask } = useTaskStore();

  const handleTaskDelete = (taskId: ITask["uid"]) => {
    deleteTask(taskId);
    toast.success("Задача удалена!");
  };

  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {tasks.map((task) => (
        <TaskItem key={task.uid} task={task} deleteTask={handleTaskDelete} />
      ))}
    </section>
  );
};
