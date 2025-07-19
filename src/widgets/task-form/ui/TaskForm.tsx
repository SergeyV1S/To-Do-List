import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useTaskStore } from "@entities/task";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from "@shared/ui";

import type { TTaskFormSchema } from "../lib";
import { taskFormSchema } from "../lib";

interface ITaskFormProps {
  defaultValues: Partial<TTaskFormSchema>;
  handleOnSubmit: (data: TTaskFormSchema) => void;
}

export const TaskForm = ({ defaultValues, handleOnSubmit }: ITaskFormProps) => {
  const { mutationTaskLoading } = useTaskStore();

  const taskForm = useForm({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      description: "",
      ...defaultValues
    }
  });

  const onSubmit = (data: TTaskFormSchema) => {
    handleOnSubmit(data);
  };

  const handleCancelTask = () => {
    taskForm.reset(defaultValues);
  };

  useEffect(() => {
    handleCancelTask();
  }, [defaultValues]);

  const submitButtonDisabled = !Object.values(taskForm.formState.dirtyFields).some(Boolean);

  return (
    <Form {...taskForm}>
      <form aria-label='task-form' onSubmit={taskForm.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <FormField
            control={taskForm.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={taskForm.control}
            name='priority'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Change priority' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Low'>Low</SelectItem>
                    <SelectItem value='Medium'>Medium</SelectItem>
                    <SelectItem value='High'>High</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={taskForm.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Change category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Bug'>Bug</SelectItem>
                    <SelectItem value='Feature'>Feature</SelectItem>
                    <SelectItem value='Documentation'>Documentation</SelectItem>
                    <SelectItem value='Refactor'>Refactor</SelectItem>
                    <SelectItem value='Test'>Test</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={taskForm.control}
            name='status'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Change status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='To Do'>To Do</SelectItem>
                    <SelectItem value='In Progress'>In Progress</SelectItem>
                    <SelectItem value='Done'>Done</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={taskForm.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <Button
            type='submit'
            isLoading={mutationTaskLoading}
            disabled={submitButtonDisabled}
            className='w-full md:w-1/3'
            size='lg'
          >
            Save
          </Button>
          <Button
            type='button'
            variant='outline'
            className='w-full md:w-1/3'
            size='lg'
            onClick={handleCancelTask}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
