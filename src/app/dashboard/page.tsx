
import { NextPage } from 'next';
import CurrentState from './CurrentState.jsx';
import Shell from './Shell';

const DashboardPage: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
      <CurrentState />
      <Shell></Shell>
    </div>
  );
};

export default DashboardPage;
