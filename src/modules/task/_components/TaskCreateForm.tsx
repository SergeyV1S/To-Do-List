import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@shared/ui";

import { type TCreateTaskFormSchema, createTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";
import { TaskForm } from "./TaskForm";

export const TaskCreateForm = () => {
  const { addTask } = useTaskStore();

  const createTaskForm = useForm({
    resolver: zodResolver(createTaskFormSchema)
  });

  const handleOnSubmit = (data: TCreateTaskFormSchema) => {
    addTask(data);
    toast.success("Задача создана!");
    createTaskForm.reset();
  };

  return (
    <TaskForm
      key='creaete-form'
      taskForm={createTaskForm}
      onSubmit={handleOnSubmit}
      className='!grid-cols-1'
    >
      <Button type='submit' className='w-full' size='lg'>
        Save
      </Button>
    </TaskForm>
  );
};
