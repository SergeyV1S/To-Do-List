import { cn } from "@shared/lib";

import { typographyVariants } from "./typography";

const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => (
  <textarea
    data-slot='textarea'
    className={cn(
      "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      typographyVariants({ variant: "paragraph_14_regular" }),
      className
    )}
    {...props}
  />
);

export { Textarea };
