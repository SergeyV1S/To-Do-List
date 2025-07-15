import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { Typography, typographyVariants } from "@shared/ui";

import { TaskForm } from "../_components";
import type { TTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";

export const CreateTaskPage = () => {
  const { addTask } = useTaskStore();
  const navigate = useNavigate();

  const handleOnSubmit = (data: TTaskFormSchema) => {
    addTask(data).then(() => {
      toast.success("Задача создана!");
      navigate(PATHS.TASKS);
    });
  };

  return (
    <div className='space-y-8'>
      <Typography
        variant='title_h2'
        tag='h1'
        className='border-b-card-foreground border-b p-3 text-center'
      >
        Create Task
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
      <TaskForm
        key='creaete-form'
        defaultValues={{
          title: "",
          description: ""
        }}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

export const createTaskRoute = createRoute(PATHS.CREATE_TASK, <CreateTaskPage />);
