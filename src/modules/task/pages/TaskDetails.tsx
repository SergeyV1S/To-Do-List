import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { toast } from "sonner";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { Typography, typographyVariants } from "@shared/ui";

import { TaskForm } from "../_components";
import type { TTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";

interface ITaskDetailsPageParams {
  taskId: string;
}

const TaskDetailsPage = () => {
  const { tasks, currentTask, setCurrentTask, updateTask } = useTaskStore();
  const { taskId } = useParams() as unknown as ITaskDetailsPageParams;

  const handleOnSubmit = (data: TTaskFormSchema) => {
    updateTask({ uid: +taskId, ...data });
    toast.success("Задача изменена!");
  };

  useEffect(() => {
    setCurrentTask && setCurrentTask(+taskId);
  }, [taskId, tasks]);

  return (
    <div className='space-y-8'>
      <Typography
        variant='title_h2'
        tag='h1'
        className='border-b-card-foreground border-b p-3 text-center'
      >
        Tasks Details
      </Typography>
      <Link
        to={PATHS.TASKS}
        className={cn(
          typographyVariants({ variant: "paragraph_14_regular" }),
          "hover:text-accent-foreground flex items-center gap-2 duration-300"
        )}
      >
        <ArrowLeftIcon size={16} /> Назад
      </Link>
      {currentTask && (
        <TaskForm key='update-form' defaultValues={currentTask} handleOnSubmit={handleOnSubmit} />
      )}
      {!currentTask && (
        <Typography variant='paragraph_16_medium' className='text-center'>
          Loading...
        </Typography>
      )}
    </div>
  );
};

export const taskDetailsRoute = createRoute(`${PATHS.TASK_INFO}/:taskId`, <TaskDetailsPage />);
