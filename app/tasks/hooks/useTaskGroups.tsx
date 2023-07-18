'use client';

import { useContext } from 'react';

import { TaskGroupsContext } from './TaskGroupsProvider';

const useTaskGroups = () => {
  const context = useContext(TaskGroupsContext);
  if (context === undefined) {
    throw new Error('useTaskGroups must be used within a TaskGroupsProvider');
  }
  return context;
};

export default useTaskGroups;
