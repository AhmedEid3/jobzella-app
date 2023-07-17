import { useState } from 'react';
import { TasksDummy } from '@/models/dummy-data';
import { Task } from '@/models/task';

export const useTasks = () => {
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

  return { tasks, addTask, updateTask };
};
