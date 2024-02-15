
import { NextPage } from 'next';
import CurrentState from './CurrentState.jsx';

const DashboardPage: NextPage = () => {
  return (
    <div>
      <h1 className={"text-5xl font-bold"}>Dashboard</h1>
      <p>Welcome to the dashboard page! Here are your cluster details:</p>
      <div className='w-1/2 float-right'><CurrentState /></div>
    </div>
  );
};

export default DashboardPage;
