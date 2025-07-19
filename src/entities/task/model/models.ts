export interface ITask {
  uid: string;
  title: string;
  description?: string;
  category: TCategory;
  status: TStatus;
  priority: TPriority;
  createdDate: string;
}

export type TCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";

export type TStatus = "To Do" | "In Progress" | "Done";

export type TPriority = "Low" | "Medium" | "High";

type TOrderBy = keyof Pick<ITask, "category" | "priority" | "status" | "createdDate">;

export interface TTaskFilters {
  category?: TCategory;
  orderBy?: TOrderBy;
  priority?: TPriority;
  search?: string;
  status?: TStatus;
}
