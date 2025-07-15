import { toast } from "sonner";

import type { TTaskFormSchema } from "../lib";
import { useTaskStore } from "../model";
import { TaskForm } from "./TaskForm";

export const TaskCreateForm = () => {
  const { addTask } = useTaskStore();

  const handleOnSubmit = (data: TTaskFormSchema) => {
    addTask(data);
    toast.success("Задача создана!");
  };

  return (
    <TaskForm
      key='creaete-form'
      defaultValues={{
        title: "",
        description: ""
      }}
      handleOnSubmit={handleOnSubmit}
    />
  );
};
