import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { LogoIcon } from "@shared/icons";
import { cn } from "@shared/lib";
import { ThemeToggle } from "@shared/theme";
import { buttonVariants } from "@shared/ui";

export const Header = () => (
  <header className='border-b-border container border-b py-2'>
    <div className='flex w-full items-center justify-between gap-6'>
      <Link to={PATHS.TASKS}>
        <LogoIcon />
      </Link>
      <div className='flex items-center gap-2 sm:gap-6'>
        <ThemeToggle />
        <Link to={PATHS.CREATE_TASK} className={cn(buttonVariants(), "flex items-center")}>
          <PlusIcon />
          Create Task
        </Link>
      </div>
    </div>
  </header>
);
