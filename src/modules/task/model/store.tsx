import { create } from "zustand";

import * as taskApi from "@shared/api";
import type { TPatchUpdateTaskDto, TPostCreateTaskDto } from "@shared/api";
import { handleError } from "@shared/helpers";

import type { ITask, TTaskFilters } from "../types";

interface ITaskState {
  getTaskLoading?: boolean;
  mutationTaskLoading?: boolean;
  taskFilters?: TTaskFilters;
  tasks: ITask[];
  filteredTasks: ITask[];
  currentTask?: ITask;
}

interface ITaskActions {
  addTask: (newTask: TPostCreateTaskDto) => Promise<void>;
  deleteTask: (taskUid: ITask["uid"]) => Promise<void>;
  updateTask: (payload: TPatchUpdateTaskDto) => Promise<void>;
  filterTask: (filters: TTaskFilters) => void;
  getCurrentTask: (taskUid: ITask["uid"]) => void;
  getTasks: () => void;
}

type TTaskStore = ITaskState & ITaskActions;

const taskStore = create<TTaskStore>((set, get) => ({
  tasks: [],
  filteredTasks: [],
  addTask: async (newTask) => {
    set({ mutationTaskLoading: true });
    try {
      await taskApi.postCreateTask(newTask);
    } catch (error) {
      handleError(error);
    } finally {
      set({ mutationTaskLoading: false });
    }
  },
  getTasks: async () => {
    set({ getTaskLoading: true });
    try {
      const tasks = (await taskApi.getTasks()).data.message;

      set({ tasks });
    } catch (error) {
      handleError(error);
    } finally {
      set({ getTaskLoading: false });
    }
  },
  getCurrentTask: async (taskUid) => {
    set({ getTaskLoading: true });
    try {
      const currentTask = (await taskApi.getTaskByUid(taskUid)).data.message;

      set({ currentTask });
    } catch (error) {
      handleError(error);
    } finally {
      set({ getTaskLoading: false });
    }
  },
  updateTask: async (payload) => {
    set({ mutationTaskLoading: true });
    try {
      await taskApi.patchUpdateTask(payload);
    } catch (error) {
      handleError(error);
    } finally {
      set({ mutationTaskLoading: false });
    }
  },
  deleteTask: async (taskUid) => {
    set({ mutationTaskLoading: true });
    try {
      const { getTasks } = get();
      await taskApi.deleteTask(taskUid).then(() => {
        getTasks();
      });
    } catch (error) {
      handleError(error);
    } finally {
      set({ mutationTaskLoading: false });
    }
  },
  filterTask: (filters) => {
    const { tasks, taskFilters } = get();
    const updatedFilters = { ...taskFilters, ...filters };

    const tasksByFilters = tasks.filter((task) => {
      const statusMatch = !updatedFilters?.status || task.status === updatedFilters.status;
      const priorityMatch = !updatedFilters?.priority || task.priority === updatedFilters.priority;
      const categoryMatch = !updatedFilters?.category || task.category === updatedFilters.category;

      return statusMatch && priorityMatch && categoryMatch;
    });

    set({ taskFilters: updatedFilters, filteredTasks: tasksByFilters });
  }
}));

export const useTaskStore = taskStore;
