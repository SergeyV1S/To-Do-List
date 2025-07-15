import { type UseFormReturn } from "react-hook-form";

import { cn } from "@shared/lib";
import {
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

import type { TCreateTaskFormSchema, TUpdateTaskFormSchema } from "../lib";

interface ITaskFormProps {
  className?: string;
  taskForm: UseFormReturn<TCreateTaskFormSchema | TUpdateTaskFormSchema>;
  children: React.ReactNode;
  onSubmit: (data: TCreateTaskFormSchema | TUpdateTaskFormSchema) => void;
}

export const TaskForm = ({ taskForm, className, children, onSubmit }: ITaskFormProps) => (
  <Form {...taskForm}>
    <form aria-label='task-form' onSubmit={taskForm.handleSubmit(onSubmit)} className='space-y-8'>
      <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2", className)}>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
      {children}
    </form>
  </Form>
);
