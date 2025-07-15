import { useNavigate } from "react-router";
import { toast } from "sonner";

import { PATHS } from "@shared/constants";
import { Button } from "@shared/ui";

import type { TTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";
import type { ITask } from "../types";
import { TaskForm } from "./TaskForm";

export const TaskUpdateForm = (task: ITask) => {
  const { updateTask, deleteTask } = useTaskStore();
  const navigate = useNavigate();

  const handleOnSubmit = (data: TTaskFormSchema) => {
    updateTask({ id: task!.id, ...data });
    toast.success("Задача изменена!");
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
    navigate(PATHS.TASKS);
    toast.success("Задача удалена!");
  };

  return (
    <TaskForm key='update-form' defaultValues={task} handleOnSubmit={handleOnSubmit}>
      <Button
        type='button'
        variant='destructive'
        className='w-full md:w-1/3'
        size='lg'
        onClick={handleDeleteTask}
      >
        Delete
      </Button>
    </TaskForm>
  );
};
