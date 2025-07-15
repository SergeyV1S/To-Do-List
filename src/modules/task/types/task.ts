export interface ITask {
  uid: string;
  title: string;
  description?: string;
  category: TCategory;
  status: TStatus;
  priority: TPriority;
  createDate: Date;
}

export type TCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";

export type TStatus = "To Do" | "In Progress" | "Done";

export type TPriority = "Low" | "Medium" | "High";

export type TTaskFilters = Partial<Pick<ITask, "category" | "priority" | "status">>;
