const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

async function getData() {
    try {
        const podsRes = await k8sApi.listPodForAllNamespaces();
        console.log(podsRes.body);
        return podsRes.body;
    } catch (err) {
        console.error(err);
    }
};

export default async function ClusterInfo() {
    // const dataString = JSON.stringify(data);
    const dataAPI = await getData();
    //kubectl config current-context: terminal command that will display the cluster name
    const clusterName = 'minikube';
    const podCount = dataAPI.items.length;
    const podV1Items = dataAPI.items[0];
    const dateCreated = podV1Items.metadata.creationTimestamp;
    //display the important info that a k8s dev might want to see
    console.log(dataAPI.items)
    // console.log(dataAPI);
    // const clusterName = dataAPI.items[]
    return (
      <div>
        <pre>
            {`\nCluster Name: ${clusterName}
              \nNumber of Pods: ${podCount}
              \nDate Created: ${dateCreated}
            `}
            
        {/* {JSON.stringify(dataAPI.items, null, 2)} */}
        </pre>
      </div>
    );
  };