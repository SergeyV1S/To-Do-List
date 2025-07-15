import {
  CancelSelect,
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
  const { taskFilters, filterTask } = useTaskStore();

  const onValueChangeHandler = (field: keyof TTaskFilters, value?: string) => {
    filterTask({
      [field]: value as TPriority | TCategory | TStatus
    });
  };

  return (
    <div aria-labelledby='filters' className='flex items-center justify-between'>
      <div className='flex items-center gap-6 max-sm:flex-col'>
        <Select
          value={taskFilters?.priority ?? ""}
          onValueChange={(priority) => onValueChangeHandler("priority", priority)}
        >
          <SelectTrigger className='min-w-40'>
            <SelectValue placeholder='Filter by priority' />
          </SelectTrigger>
          <CancelSelect
            selectValue={taskFilters?.priority}
            onClick={() => onValueChangeHandler("priority", undefined)}
          />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priority</SelectLabel>
              <SelectItem value='Low'>Low</SelectItem>
              <SelectItem value='Medium'>Medium</SelectItem>
              <SelectItem value='High'>High</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={taskFilters?.category ?? ""}
          onValueChange={(category) => onValueChangeHandler("category", category)}
        >
          <SelectTrigger className='min-w-42'>
            <SelectValue placeholder='Filter by category' />
          </SelectTrigger>
          <CancelSelect
            selectValue={taskFilters?.category}
            onClick={() => onValueChangeHandler("category", undefined)}
          />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value='Bug'>Bug</SelectItem>
              <SelectItem value='Feature'>Feature</SelectItem>
              <SelectItem value='Documentation'>Documentation</SelectItem>
              <SelectItem value='Refactor'>Refactor</SelectItem>
              <SelectItem value='Test'>Test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={taskFilters?.status ?? ""}
          onValueChange={(status) => onValueChangeHandler("status", status)}
        >
          <SelectTrigger className='min-w-28'>
            <SelectValue placeholder='Filter by status' />
          </SelectTrigger>
          <CancelSelect
            selectValue={taskFilters?.status}
            onClick={() => onValueChangeHandler("status", undefined)}
          />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
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
