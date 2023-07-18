'use client';

import { createContext, useContext, useState } from 'react';
import { TasksDummy } from '@/models/dummy-data';
import { Task, TaskStatus } from '@/models/task';

interface TasksContextType {
  tasks: Array<Task>;
  todoTasks: Array<Task>;
  totalTasks: number;
  inProgressTasks: Array<Task>;
  completedTasks: Array<Task>;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Array<Task>>(TasksDummy);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (task: Task) => {
    const index = tasks.findIndex((t) => t.id === task.id);
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const totalTasks = tasks.length;

  const todoTasks = tasks.filter((task) => task.status === TaskStatus.TODO);

  const inProgressTasks = tasks.filter(
    (task) => task.status === TaskStatus.IN_PROGRESS
  );

  return (
    <TasksContext.Provider
      value={{
        addTask,
        completedTasks,
        inProgressTasks,
        tasks,
        todoTasks,
        totalTasks,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
