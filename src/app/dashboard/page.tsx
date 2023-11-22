
import { NextPage } from 'next';
import CurrentState from './CurrentState.jsx';

const DashboardPage: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
      <CurrentState />
    </div>
  );
};

export default DashboardPage;
