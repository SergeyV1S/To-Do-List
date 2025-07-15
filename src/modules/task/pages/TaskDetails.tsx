import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { Typography, typographyVariants } from "@shared/ui";

import { TaskForm } from "../_components";
import type { TTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";

interface ITaskDetailsPageParams {
  taskUid: string;
}

const TaskDetailsPage = () => {
  const { getTaskLoading, currentTask, getCurrentTask, updateTask } = useTaskStore();
  const { taskUid } = useParams() as unknown as ITaskDetailsPageParams;
  const navigate = useNavigate();

  const handleOnSubmit = (data: TTaskFormSchema) => {
    updateTask({ uid: taskUid, ...data }).then(() => {
      navigate(PATHS.TASKS);
      toast.success("Задача успешно изменена!");
    });
  };

  useEffect(() => {
    getCurrentTask(taskUid);
  }, [taskUid]);

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
      {currentTask && !getTaskLoading && (
        <TaskForm defaultValues={currentTask} handleOnSubmit={handleOnSubmit} />
      )}
      {!currentTask && getTaskLoading && (
        <Typography variant='paragraph_16_medium' className='text-center'>
          Loading...
        </Typography>
      )}
    </div>
  );
};

export const taskDetailsRoute = createRoute(`${PATHS.TASK_INFO}/:taskUid`, <TaskDetailsPage />);
