import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { TaskForm } from "@widgets/task-form";
import type { TTaskFormSchema } from "@widgets/task-form";

import { useTaskStore } from "@entities/task";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { typographyVariants } from "@shared/ui";

export const CreateTaskPage = () => {
  const { addTask } = useTaskStore();
  const navigate = useNavigate();

  const createTask = (data: TTaskFormSchema) => {
    addTask(data).then(() => {
      toast.success("Задача создана!");
      navigate(PATHS.TASKS);
    });
  };

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
      <TaskForm
        key='creaete-form'
        defaultValues={{
          title: "",
          description: ""
        }}
        handleOnSubmit={createTask}
      />
    </div>
  );
};

export const createTaskRoute = createRoute(PATHS.CREATE_TASK, <CreateTaskPage />);
