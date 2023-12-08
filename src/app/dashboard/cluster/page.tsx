import { NextPage } from 'next';
import ClusterInfo from './ClusterInfo.jsx';

const ClusterPage: NextPage = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard page!</p>
        <ClusterInfo />
      </div>
    );
  };
  
  export default ClusterPage;