import { z } from "zod";

const categoryEnum = z.enum(["Bug", "Feature", "Documentation", "Refactor", "Test"]);
const statusEnum = z.enum(["To Do", "In Progress", "Done"]);
const priorityEnum = z.enum(["Low", "Medium", "High"]);

export const taskFormSchema = z.object({
  title: z.string().min(1, "Required field"),
  description: z.string().optional(),
  category: categoryEnum.nonoptional("Required field"),
  status: statusEnum.nonoptional("Required field"),
  priority: priorityEnum.nonoptional("Required field")
});

export type TTaskFormSchema = z.infer<typeof taskFormSchema>;
