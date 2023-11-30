const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

async function getData() {
    try {
        const podsRes = await k8sApi.listNamespacedPod('default');
        console.log(podsRes.body);
        return podsRes.body;
    } catch (err) {
        console.error(err);
    }
};

export default async function CurrentState() {
  // const dataString = JSON.stringify(data);
  const dataAPI = await getData();
  console.log(dataAPI);

  return (
    <div>
      <pre>
      {JSON.stringify(dataAPI, null, 2)}
      </pre>
    </div>
  );
};