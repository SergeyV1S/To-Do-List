import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { TaskForm } from "@widgets/task-form";
import type { TTaskFormSchema } from "@widgets/task-form";

import { useTaskStore } from "@entities/task";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { Spinner, typographyVariants } from "@shared/ui";

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
  }, []);

  return (
    <div className='space-y-8'>
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
      {!currentTask && getTaskLoading && <Spinner />}
    </div>
  );
};

export const taskDetailsRoute = createRoute(`${PATHS.TASK_INFO}/:taskUid`, <TaskDetailsPage />);
