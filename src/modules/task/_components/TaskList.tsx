import { Typography } from "@shared/ui";

import { useTaskStore } from "../model";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <section className='flex flex-wrap justify-center gap-6'>
      {tasks.length === 0 && (
        <div className='bg-accent-foreground rounded-md px-5 py-1.5'>
          <Typography variant='paragraph_14_regular' className='text-primary-foreground'>
            Нет задач
          </Typography>
        </div>
      )}
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </section>
  );
};
