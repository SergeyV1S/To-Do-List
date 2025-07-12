import { createContext, useContext, useEffect, useState } from "react";

import { defaultTasks } from "../constants";
import type { ITask, TTaskFilters, TUpdateTaskPayload } from "../types";

type TTaskProviderState = {
  tasks: ITask[];
  addTask: (newTask: Omit<ITask, "id">) => void;
  deleteTask: (taskId: ITask["id"]) => void;
  updateTask: (payload: TUpdateTaskPayload) => void;
  filterTask: (filters: TTaskFilters) => void;
  getTask?: (taskId: ITask["id"]) => ITask;
};

const initialState: TTaskProviderState = {
  tasks: defaultTasks,
  addTask: () => null,
  deleteTask: () => null,
  updateTask: () => null,
  filterTask: () => null
};

const TaskContext = createContext<TTaskProviderState>(initialState);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(defaultTasks);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(defaultTasks);
  const [taskFilters, setTaskFilters] = useState<TTaskFilters>();

  const addTask = (newTask: Omit<ITask, "id">) => {
    const newTaskWithId = {
      id: tasks.length + 1,
      ...newTask
    };
    setTasks((prev) => [newTaskWithId, ...prev]);
  };

  const deleteTask = (taskId: ITask["id"]) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const updateTask = (payload: TUpdateTaskPayload) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === payload.id ? { ...task, ...payload } : task))
    );
  };

  const filterTask = (filters: TTaskFilters) => {
    setTaskFilters((prev) => ({ ...prev, ...filters }));
  };

  const getTask = (taskId: ITask["id"]) => tasks.filter((task) => task.id === taskId)[0];

  useEffect(() => {
    if (!taskFilters) {
      setFilteredTasks(tasks);
      return;
    }

    const tasksByFilters = tasks.filter((task) => {
      const statusMatch = !taskFilters.status || task.status === taskFilters.status;
      const priorityMatch = !taskFilters.priority || task.priority === taskFilters.priority;
      const categoryMatch = !taskFilters.category || task.category === taskFilters.category;

      return statusMatch && priorityMatch && categoryMatch;
    });

    setFilteredTasks(tasksByFilters);
  }, [taskFilters, tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks: filteredTasks, addTask, deleteTask, updateTask, filterTask, getTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskStore = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("А где контекст броу?");

  return context;
};
