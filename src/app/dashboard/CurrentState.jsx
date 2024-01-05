const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

async function getData() {
    try {
        // 1. Find out all the namespaces that exist
        //    (this is the same as `kubectl get namespaces`)
        //    use some k8s api to get all namespaces as an array
        // 2. Based on the namespaces, find out all the pods that exist
        //    namespace_array.forEach(k8sApi.listNameSpacedPod(namespace))
        //    probably return a react component (i.e. card) that displays the pods and basic info
        // 3. After getting all pods from all namespaces, display this data in a sane way
        const podsRes = await k8sApi.listNamespacedPod('default');
        // console.log(podsRes.body);
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
    <div className={"mockup-code"}>
      <pre><code>
      {JSON.stringify(dataAPI, null, 2)}
      </code>
      </pre>
    </div>
  );
};
