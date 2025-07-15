import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { cn, createRoute } from "@shared/lib";
import { Typography, typographyVariants } from "@shared/ui";

import { TaskCreateForm } from "../_components";

export const CreateTaskPage = () => (
  <div className='space-y-8'>
    <Typography
      variant='title_h2'
      tag='h1'
      className='border-b-card-foreground border-b p-3 text-center'
    >
      Create Task
    </Typography>
    <Link
      to={PATHS.TASKS}
      className={cn(
        typographyVariants({ variant: "paragraph_14_regular" }),
        "hover:text-accent-foreground flex items-center gap-2 duration-300"
      )}
    >
      <ArrowLeftIcon size={16} /> Назад
    </Link>
    <TaskCreateForm />
  </div>
);

export const createTaskRoute = createRoute(PATHS.CREATE_TASK, <CreateTaskPage />);
