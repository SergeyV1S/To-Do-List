import * as React from "react";

import { cn } from "@shared/lib";

import { typographyVariants } from "./typography";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot='card'
    className={cn(
      "bg-card text-card-foreground flex h-full min-h-64 w-64 flex-col gap-6 rounded-xl border py-6 shadow-sm",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot='card-header'
    className={cn(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className
    )}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot='card-title'
    className={cn("truncate", typographyVariants({ variant: "paragraph_16_medium" }), className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot='card-description'
    className={cn(
      typographyVariants({ variant: "paragraph_14_regular" }),
      "text-muted-foreground line-clamp-6 pt-2",
      className
    )}
    {...props}
  />
);

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div data-slot='card-content' className={cn("flex-grow px-6", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot='card-footer'
    className={cn("mt-auto flex items-center px-6 [.border-t]:pt-6", className)}
    {...props}
  />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
