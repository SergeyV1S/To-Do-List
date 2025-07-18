import { cn } from "@shared/lib";

import { typographyVariants } from "./typography";

const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => (
  <input
    type={type}
    data-slot='input'
    className={cn(
      "selection:bg-accent-foreground/20 dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      typographyVariants({ variant: "paragraph_14_regular" }),
      className
    )}
    {...props}
  />
);

export { Input };
