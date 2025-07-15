import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui";

import { categoryVariants, priorityVariants, statusVariants } from "../constants";
import type { ITask } from "../types";

export const TaskItem = (props: ITask) => (
  <Link to={`${PATHS.TASK_INFO}/${props.id}`}>
    <Card className='duration-300 hover:origin-bottom hover:scale-105 hover:rotate-1 hover:shadow-2xl'>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        {props.description && <CardDescription>{props.description}</CardDescription>}
      </CardHeader>
      <CardContent className='flex flex-col justify-end'>
        <div className='flex flex-wrap items-center justify-end gap-1'>
          <Badge variant={categoryVariants[props.category]}>{props.category}</Badge>
          <Badge variant={priorityVariants[props.priority]}>{props.priority}</Badge>
          <Badge variant={statusVariants[props.status]}>{props.status}</Badge>
        </div>
      </CardContent>
    </Card>
  </Link>
);
