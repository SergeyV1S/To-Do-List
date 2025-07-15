import type { ITask } from "@modules/task/types";

import { api } from "../instance";

export type TPostCreateTaskDto = Omit<ITask, "uid" | "createdDate">;

export const postCreateTask = async (task: TPostCreateTaskDto) => api.post("/task/create", task);
