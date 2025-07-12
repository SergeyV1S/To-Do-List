import { PlusIcon } from "lucide-react";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Typography
} from "@shared/ui";

import { TaskCreateForm, TaskFilter, TaskList } from "../_components";

const TasksPage = () => (
  <main className='relative space-y-8'>
    <Typography
      variant='title_h2'
      tag='h1'
      className='border-b-card-foreground border-b p-3 text-center'
    >
      Tasks
    </Typography>
    <TaskFilter />
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild className='absolute top-22 right-0'>
          <DialogTrigger asChild>
            <Button variant='ghost' size='icon'>
              <PlusIcon />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant='paragraph_12_regular'>Create Task</Typography>
        </TooltipContent>
      </Tooltip>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>Create Task</DialogTitle>
        <TaskCreateForm />
      </DialogContent>
    </Dialog>

    <TaskList />
  </main>
);

export const tasksRoute = createRoute(PATHS.TASKS, <TasksPage />);
