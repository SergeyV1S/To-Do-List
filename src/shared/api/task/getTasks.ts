import type { ITask, TTaskFilters } from "@modules/task/types";

import { api } from "../instance";

interface IGetTaskResponse extends IBaseApiResponse<ITask[]> {}

export const getTasks = async (filters?: TTaskFilters) => {
  if (filters) {
    const params = Object.keys(filters).reduce(
      (prev, filter) => ({
        ...prev,
        [filter]: filters[filter as keyof TTaskFilters]
      }),
      {}
    ) as unknown as TTaskFilters;

    return api.get<IGetTaskResponse>("/task", { params });
  }

  return api.get<IGetTaskResponse>("/task");
};
