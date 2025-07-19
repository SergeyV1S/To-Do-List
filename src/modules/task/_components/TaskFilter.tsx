import { useDebouncedInput } from "@shared/hooks";
import {
  CancelSelect,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@shared/ui";

import { useTaskStore } from "../model";
import type { TTaskFilters } from "../types";

export const TaskFilter = () => {
  const { taskFilters, setFilters } = useTaskStore();
  const { inputValue, handleChange } = useDebouncedInput({
    value: taskFilters?.search,
    onChange: (value) => {
      setFilters({ search: value });
    }
  });

  const onValueChangeHandler = (field: keyof TTaskFilters, value?: string) => {
    setFilters({
      [field]: value
    });
  };

  return (
    <div className='space-y-6'>
      <SearchInput
        value={inputValue ?? ""}
        onChange={handleChange}
        placeholder='Type to search from task list'
      />
      <div
        aria-labelledby='filters'
        className='flex items-center justify-between max-sm:justify-center'
      >
        <div className='grid w-full grid-cols-2 gap-6 md:grid-cols-4'>
          <Select
            value={taskFilters?.priority ?? ""}
            onValueChange={(priority) => onValueChangeHandler("priority", priority)}
          >
            <SelectTrigger>
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
            <SelectTrigger>
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
            <SelectTrigger>
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
          <Select
            value={taskFilters?.orderBy ?? ""}
            onValueChange={(orderBy) => onValueChangeHandler("orderBy", orderBy)}
          >
            <SelectTrigger>
              <SelectValue placeholder='Order by' />
            </SelectTrigger>
            <CancelSelect
              selectValue={taskFilters?.orderBy}
              onClick={() => onValueChangeHandler("orderBy", undefined)}
            />
            <SelectContent>
              <SelectGroup>
                <SelectItem value='category'>Category</SelectItem>
                <SelectItem value='priority'>Priority</SelectItem>
                <SelectItem value='status'>Status</SelectItem>
                <SelectItem value='createdDate'>Created date</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
