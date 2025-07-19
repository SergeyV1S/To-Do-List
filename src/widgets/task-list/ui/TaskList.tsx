import { toast } from "sonner";

import { TaskItem, useTaskStore } from "@entities/task";
import type { ITask } from "@entities/task";

export const TaskList = () => {
  const { tasks, deleteTask } = useTaskStore();

  const handleTaskDelete = (taskUid: ITask["uid"]) => {
    deleteTask(taskUid).then(() => {
      toast.success("Задача удалена!");
    });
  };

  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {tasks.map((task) => (
        <TaskItem key={task.uid} task={task} deleteTask={handleTaskDelete} />
      ))}
    </section>
  );
};
