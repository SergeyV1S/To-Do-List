import type { VariantProps } from "class-variance-authority";

import type { badgeVariants } from "@shared/ui";

import type { TCategory, TPriority, TStatus } from "../model";

type TVariant<Entity extends TCategory | TPriority | TStatus> = Record<
  Entity,
  VariantProps<typeof badgeVariants>["variant"]
>;

const categoryVariants: TVariant<TCategory> = {
  Bug: "destructive",
  Test: "attention",
  Feature: "verify",
  Refactor: "secondary",
  Documentation: "default"
};

const priorityVariants: TVariant<TPriority> = {
  High: "destructive",
  Medium: "attention",
  Low: "verify"
};

const statusVariants: TVariant<TStatus> = {
  Done: "verify",
  "In Progress": "attention",
  "To Do": "destructive"
};

export { categoryVariants, priorityVariants, statusVariants };
