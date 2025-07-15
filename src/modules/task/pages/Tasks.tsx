import { PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";
import { Tooltip, TooltipContent, TooltipTrigger, Typography, buttonVariants } from "@shared/ui";

import { TaskFilter, TaskList } from "../_components";
import { useTaskStore } from "../model";

const TasksPage = () => {
  const { tasks, getTaskLoading, getTasks } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main className='relative space-y-8'>
      <Typography
        variant='title_h2'
        tag='h1'
        className='border-b-card-foreground border-b p-3 text-center'
      >
        Tasks
      </Typography>
      <TaskFilter />
      <Tooltip>
        <TooltipTrigger asChild className='absolute top-22 right-0'>
          <Link
            to={PATHS.CREATE_TASK}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <PlusIcon />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant='paragraph_12_regular'>Create Task</Typography>
        </TooltipContent>
      </Tooltip>

      {getTaskLoading && getTaskLoading && <div>Loading...</div>}
      {tasks.length !== 0 && <TaskList />}
      {tasks.length === 0 && !getTaskLoading && (
        <div className='bg-accent-foreground rounded-md px-5 py-1.5'>
          <Typography variant='paragraph_14_regular' className='text-primary-foreground'>
            Нет задач
          </Typography>
        </div>
      )}
    </main>
  );
};

export const tasksRoute = createRoute(PATHS.TASKS, <TasksPage />);
