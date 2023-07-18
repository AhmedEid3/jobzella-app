'use client';

import { useState } from 'react';
import { TasksDummy } from '@/models/dummy-data';
import { Task, TaskStatus } from '@/models/task';

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

  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const totalTasks = tasks.length;

  const todoTasks = tasks.filter((task) => task.status === TaskStatus.TODO);

  const inProgressTasks = tasks.filter(
    (task) => task.status === TaskStatus.IN_PROGRESS
  );

  return {
    tasks,
    todoTasks,
    totalTasks,
    inProgressTasks,
    completedTasks,
    addTask,
    updateTask,
  };
};
