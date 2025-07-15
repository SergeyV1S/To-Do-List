import type { ITask } from "@modules/task/types";

import { api } from "../instance";

interface IGetTaskByUidResponse extends IBaseApiResponse<ITask> {}

export const getTaskByUid = async (taskUid: ITask["uid"]) =>
  api.get<IGetTaskByUidResponse>(`task/${taskUid}`);
