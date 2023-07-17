import { useState } from 'react';
import { TaskGroupsDummy } from '@/models/dummy-data';
import { TaskGroup } from '@/models/task';

const useTaskGroups = () => {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>(TaskGroupsDummy);

  const addTaskGroup = (taskGroup: TaskGroup) => {
    setTaskGroups([...taskGroups, taskGroup]);
  };

  return { taskGroups, addTaskGroup };
};

export default useTaskGroups;
