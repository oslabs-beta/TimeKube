import { NextPage } from 'next';
import ClusterInfo from './ClusterInfo.jsx';
import BackupButton from "@/app/dashboard/cluster/[clusterId]/backup/BackupButton.tsx";
import CurrentState from '../../CurrentState.jsx';

const ClusterPage = ({params}: {params: ClusterPageParams}) => {
    return (
      <div>
        <div className='text-xl pl-16 text-center py-16'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Cluster {params.clusterId} Dashboard</h1>
          <p className='mt-6 text-2xl leading-8 text-gray-600'>Check out your cluster details and backup your data right here!</p>
          <ClusterInfo />
          <div className='flex justify-center space-x-12'>
            <BackupButton text={`Back Up Now`} />
            <BackupButton text={`Schedule Automatic Back Up`} />
          </div>
        </div>
        <div>
          <div className='mt-6 text-2xl font-bold leading-8 text-gray-600 text-center pb-8'>See your detailed cluster info below</div>
          <CurrentState/>
        </div>
      </div>
    );
  };
  
  export default ClusterPage;