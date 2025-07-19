import { TrashIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { formatDate } from "@shared/helpers";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Typography
} from "@shared/ui";

import { categoryVariants, priorityVariants, statusVariants } from "../constants";
import type { ITask } from "../types";

interface ITaskItemProps {
  task: ITask;
  deleteTask: (taskUid: ITask["uid"]) => void;
}

export const TaskItem = ({ task, deleteTask }: ITaskItemProps) => (
  <Link to={`${PATHS.TASK_INFO}/${task.uid}`} className='w-full'>
    <Card className='relative duration-300 hover:origin-bottom hover:scale-105 hover:rotate-1 hover:shadow-2xl'>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        {task.description && <CardDescription>{task.description}</CardDescription>}
      </CardHeader>
      <CardContent className='flex flex-col justify-end'>
        <div className='flex flex-wrap items-center justify-start gap-1'>
          <Badge variant={categoryVariants[task.category]}>{task.category}</Badge>
          <Badge variant={priorityVariants[task.priority]}>{task.priority}</Badge>
          <Badge variant={statusVariants[task.status]}>{task.status}</Badge>
        </div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Typography variant='paragraph_14_regular' className='opacity-50'>
          {formatDate(task.createdDate)}
        </Typography>
      </CardFooter>
      <div className='absolute top-4 right-4'>
        <Button
          onClick={(e) => {
            e.preventDefault();
            deleteTask(task.uid);
          }}
          variant='destructive'
          size='icon'
          className='!shadow-none'
        >
          <TrashIcon />
        </Button>
      </div>
    </Card>
  </Link>
);
