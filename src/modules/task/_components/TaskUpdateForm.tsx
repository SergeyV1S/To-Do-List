import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { PATHS } from "@shared/constants";
import { Button } from "@shared/ui";

import { updateTaskFormSchema } from "../lib";
import type { TUpdateTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";
import type { ITask } from "../types";
import { TaskForm } from "./TaskForm";

export const TaskUpdateForm = (task: ITask) => {
  const { updateTask, deleteTask } = useTaskStore();
  const navigate = useNavigate();

  const updateTaskForm = useForm({
    resolver: zodResolver(updateTaskFormSchema),
    defaultValues: {
      title: task?.title,
      description: task?.description,
      category: task?.category,
      priority: task?.priority,
      status: task?.status
    }
  });

  const handleOnSubmit = (data: TUpdateTaskFormSchema) => {
    updateTask({ id: task!.id, ...data });
    toast.success("Задача изменена!");
    updateTaskForm.reset(data);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
    navigate(PATHS.TASKS);
    toast.success("Задача удалена!");
  };

  const submitButtonDisabled = !Object.values(updateTaskForm.formState.dirtyFields).some(Boolean);

  return (
    <TaskForm key='update-form' taskForm={updateTaskForm} onSubmit={handleOnSubmit}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Button type='submit' disabled={submitButtonDisabled} className='w-full md:w-1/3' size='lg'>
          Save
        </Button>
        <Button
          type='button'
          variant='destructive'
          className='w-full md:w-1/3'
          size='lg'
          onClick={handleDeleteTask}
        >
          Delete
        </Button>
      </div>
    </TaskForm>
  );
};
