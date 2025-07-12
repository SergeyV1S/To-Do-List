import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@shared/ui";

import { useTaskStore } from "../model";
import type { TCategory, TPriority, TStatus, TTaskFilters } from "../types";

export const TaskFilter = () => {
  const { filterTask } = useTaskStore();

  const onValueChangeHandler = (field: keyof TTaskFilters, value: string) => {
    filterTask({
      [field]: value !== "all" && (value as TPriority | TCategory | TStatus)
    });
  };

  return (
    <div aria-labelledby='filters' className='flex items-center justify-center'>
      <div className='flex items-center gap-6 max-sm:flex-col'>
        <Select onValueChange={(priority) => onValueChangeHandler("priority", priority)}>
          <SelectTrigger className='min-w-40'>
            <SelectValue placeholder='Filter by priority' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priority</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='Low'>Low</SelectItem>
              <SelectItem value='Medium'>Medium</SelectItem>
              <SelectItem value='High'>High</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(category) => onValueChangeHandler("category", category)}>
          <SelectTrigger className='min-w-42'>
            <SelectValue placeholder='Filter by category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='Bug'>Bug</SelectItem>
              <SelectItem value='Feature'>Feature</SelectItem>
              <SelectItem value='Documentation'>Documentation</SelectItem>
              <SelectItem value='Refactor'>Refactor</SelectItem>
              <SelectItem value='Test'>Test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(status) => onValueChangeHandler("status", status)}>
          <SelectTrigger className='min-w-28'>
            <SelectValue placeholder='Filter by status' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='To Do'>To Do</SelectItem>
              <SelectItem value='In Progress'>In Progress</SelectItem>
              <SelectItem value='Done'>Done</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
