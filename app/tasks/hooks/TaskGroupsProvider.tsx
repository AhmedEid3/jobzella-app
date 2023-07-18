'use client';

import { createContext, useState } from 'react';
import { TaskGroupsDummy } from '@/models/dummy-data';
import { TaskGroup } from '@/models/task';

interface TaskGroupsContextType {
  taskGroups: Array<TaskGroup>;
  addTaskGroup: (name: string) => void;
}

export const TaskGroupsContext = createContext<
  TaskGroupsContextType | undefined
>(undefined);

const TaskGroupsProvider = ({ children }: { children: React.ReactNode }) => {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>(TaskGroupsDummy);

  const addTaskGroup = (name: string) => {
    if (!name) return;
    const taskGroup: TaskGroup = {
      id: Math.random().toString(),
      name,
      iconUrl: '/images/icon-development.svg',
    };

    setTaskGroups([...taskGroups, taskGroup]);
  };

  return (
    <TaskGroupsContext.Provider value={{ addTaskGroup, taskGroups }}>
      {children}
    </TaskGroupsContext.Provider>
  );
};

export default TaskGroupsProvider;
