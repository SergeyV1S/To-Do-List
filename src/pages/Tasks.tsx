import { useEffect } from "react";

import { TaskFilter } from "@widgets/task-filter";
import { TaskList } from "@widgets/task-list";

import { useTaskStore } from "@entities/task";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";
import { Spinner, Typography } from "@shared/ui";

const TasksPage = () => {
  const { tasks, taskFilters, getTaskLoading, getTasks } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, [taskFilters]);

  return (
    <main className='relative space-y-8'>
      <TaskFilter />

      {getTaskLoading && <Spinner className='top-[200%]' />}

      <TaskList />
      {tasks.length === 0 && !getTaskLoading && (
        <div className='flex items-center justify-center'>
          <div className='bg-accent-foreground rounded-md px-5 py-1.5'>
            <Typography variant='paragraph_14_regular' className='text-primary-foreground'>
              Нет задач
            </Typography>
          </div>
        </div>
      )}
    </main>
  );
};

export const tasksRoute = createRoute(PATHS.TASKS, <TasksPage />);
