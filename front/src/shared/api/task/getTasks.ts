import type { ITask } from "@modules/task/types";

import { api } from "../instance";

interface IGetTaskResponse extends IBaseApiResponse<ITask[]> {}

export const getTasks = async () => api.get<IGetTaskResponse>("/task");
