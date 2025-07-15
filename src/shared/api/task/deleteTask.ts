import type { ITask } from "@modules/task/types";

import { api } from "../instance";

export const deleteTask = async (taskUid: ITask["uid"]) => api.delete(`/task/${taskUid}`);
