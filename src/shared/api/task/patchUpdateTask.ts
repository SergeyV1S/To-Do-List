import type { ITask } from "@modules/task/types";

import { api } from "../instance";

export type TPatchUpdateTaskDto = Partial<Omit<ITask, "uid">> & Pick<ITask, "uid">;

export const patchUpdateTask = async (data: TPatchUpdateTaskDto) =>
  api.patch("/tasks/update", data);
