import TaskGroupsProvider from './TaskGroupsProvider';
import TasksProvider from './TasksProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <TaskGroupsProvider>
      <TasksProvider>{children}</TasksProvider>
    </TaskGroupsProvider>
  );
};

export default Providers;
