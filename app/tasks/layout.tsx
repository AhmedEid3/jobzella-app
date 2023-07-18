import DashboardLayout from './components/DashboardLayout';
import Providers from './hooks/Providers';

export default function TasksLayout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <DashboardLayout>{children}</DashboardLayout>
    </Providers>
  );
}
