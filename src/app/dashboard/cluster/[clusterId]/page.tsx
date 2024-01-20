import { NextPage } from 'next';
import ClusterInfo from './ClusterInfo.jsx';
import BackupButton from "@/app/dashboard/cluster/[clusterId]/backup/BackupButton.tsx";

const ClusterPage = ({params}: {params: ClusterPageParams}) => {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard page!</p>
        <ClusterInfo />
        <BackupButton text={`Manually back up Cluster ${params.clusterId}`} />
      </div>
    );
  };
  
  export default ClusterPage;