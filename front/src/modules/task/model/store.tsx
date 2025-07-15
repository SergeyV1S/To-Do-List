import { create } from "zustand";

import { getTasks, postCreateTask } from "@shared/api";
import { handleError } from "@shared/helpers";

import type { ITask, TTaskFilters, TUpdateTaskPayload } from "../types";

interface ITaskState {
  isLoading?: boolean;
  taskFilters?: TTaskFilters;
  tasks: ITask[];
  filteredTasks: ITask[];
  currentTask?: ITask;
}

interface ITaskActions {
  addTask: (newTask: Omit<ITask, "uid">) => Promise<void>;
  deleteTask: (taskId: ITask["uid"]) => void;
  updateTask: (payload: TUpdateTaskPayload) => void;
  filterTask: (filters: TTaskFilters) => void;
  setCurrentTask?: (taskId: ITask["uid"]) => void;
  getTasks: () => void;
}

type TTaskStore = ITaskState & ITaskActions;

const taskStore = create<TTaskStore>((set, get) => ({
  tasks: [],
  filteredTasks: [],
  addTask: async (newTask) => {
    set({ isLoading: true });
    try {
      await postCreateTask(newTask);
    } catch (error) {
      handleError(error);
    } finally {
      set({ isLoading: false });
    }
  },
  getTasks: async () => {
    set({ isLoading: true });
    try {
      const tasks = (await getTasks()).data.message;

      set({ tasks });
    } catch (error) {
      handleError(error);
    } finally {
      set({ isLoading: false });
    }
  },
  updateTask: (payload) => {
    const { tasks } = get();

    const updatedTasks = tasks.map((task) =>
      task.uid === payload.uid ? { ...task, ...payload } : task
    );

    set({ tasks: updatedTasks, filteredTasks: updatedTasks });
  },
  deleteTask: (taskId) => {
    const { tasks } = get();

    const newTasks = tasks.filter((task) => task.uid !== taskId);

    set({ tasks: newTasks, filteredTasks: newTasks });
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
