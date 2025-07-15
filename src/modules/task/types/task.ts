export interface ITask {
  uid: number;
  title: string;
  description?: string;
  category: TCategory;
  status: TStatus;
  priority: TPriority;
}

export type TCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";

export type TStatus = "To Do" | "In Progress" | "Done";

export type TPriority = "Low" | "Medium" | "High";

export type TUpdateTaskPayload = Partial<Omit<ITask, "id">> & Pick<ITask, "uid">;

export type TTaskFilters = Partial<Pick<ITask, "category" | "priority" | "status">>;
