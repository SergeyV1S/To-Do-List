import { create } from "zustand";

import { defaultTasks } from "../constants";
import type { ITask, TTaskFilters, TUpdateTaskPayload } from "../types";

interface ITaskState {
  taskFilters?: TTaskFilters;
  tasks: ITask[];
  filteredTasks: ITask[];
  currentTask?: ITask;
}

interface ITaskActions {
  addTask: (newTask: Omit<ITask, "id">) => void;
  deleteTask: (taskId: ITask["id"]) => void;
  updateTask: (payload: TUpdateTaskPayload) => void;
  filterTask: (filters: TTaskFilters) => void;
  setCurrentTask?: (taskId: ITask["id"]) => void;
}

type TTaskStore = ITaskState & ITaskActions;

const taskStore = create<TTaskStore>((set, get) => ({
  tasks: defaultTasks,
  filteredTasks: defaultTasks,
  addTask: (newTask) => {
    const { tasks } = get();
    const newTaskWithId = {
      id: tasks.length + 1,
      ...newTask
    };

    set({ tasks: [newTaskWithId, ...tasks], filteredTasks: [newTaskWithId, ...tasks] });
  },
  setCurrentTask: (taskId) => {
    const { tasks } = get();
    const currentTask = tasks.filter((task) => task.id === taskId)[0];

    set({ currentTask });
  },
  updateTask: (payload) => {
    const { tasks } = get();

    const updatedTasks = tasks.map((task) =>
      task.id === payload.id ? { ...task, ...payload } : task
    );

    set({ tasks: updatedTasks, filteredTasks: updatedTasks });
  },
  deleteTask: (taskId) => {
    const { tasks } = get();

    const newTasks = tasks.filter((task) => task.id !== taskId);

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
