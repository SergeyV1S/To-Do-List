import type { ITask } from "@modules/task/types";

import { api } from "../instance";

type TPostCreateTaskDto = Omit<ITask, "uid">;

export const postCreateTask = async (task: TPostCreateTaskDto) => api.post("/task/create", task);
