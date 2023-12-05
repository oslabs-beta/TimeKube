const child_process = require('child_process');

const command = `
i=$((0))
for n in $(kubectl get -o=custom-columns=NAMESPACE:.metadata.namespace,KIND:.kind,NAME:.metadata.name pv,pvc,configmap,ingress,service,secret,deployment,statefulset,hpa,job,cronjob --all-namespaces | grep -v 'secrets/default-token')
do
	if (( $i < 1 )); then
		namespace=$n
		i=$(($i+1))
		if [[ "$namespace" == "PersistentVolume" ]]; then
			kind=$n
			i=$(($i+1))
		fi
	elif (( $i < 2 )); then
		kind=$n
		i=$(($i+1))
	elif (( $i < 3 )); then
		name=$n
		i=$((0))
		if [[ "$namespace" != "NAMESPACE" ]]; then
			mkdir -p $namespace
			kubectl get $kind -o=yaml --export $name -n $namespace > $namespace/$kind.$name.yaml
		fi
	fi
done
`
const wrapper = () => {
  child_process.exec(command, (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error('Error executing command:', err);
      return;
    }

    console.log('Stdout:', stdout);
    console.error('Stderr:', stderr);
  });
}

export default async function ShellCommand() {
  // const dataString = JSON.stringify(data);
  const res = wrapper();

  return (
    <div>
    </div>
  );
};