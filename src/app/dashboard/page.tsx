
import { NextPage } from 'next';
import CurrentState from './CurrentState.jsx';
import Shell from './Shell';

const DashboardPage: NextPage = () => {
  return (
    <div>
      <h1 className={"text-5xl font-bold"}>Dashboard</h1>
      <p>Welcome to the dashboard page! Here are your cluster details:</p>
      <CurrentState />
    </div>
  );
};

export default DashboardPage;
