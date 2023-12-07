const child_process = require('child_process');

type k8sShellCommands = {
  getResources: string
}

const bash = {
  getResources: "kubectl api-resources --namespaced=true 2>/dev/null | tail -n +2 | awk '{print $1}' > resources.txt",
  writeYaml: ' \
while read -r resource \
do \
    while read -r namespace item x \
    do \
        mkdir -p "${ROOT}/${namespace}/${resource}"         \
        kubectl get "$resource" -n "$namespace" "$item" -o yaml > "backup/${namespace}/${resource}/$item.yaml" & \
    done < <(kubectl get "$resource" --all-namespaces 2>&1  | tail -n +2) \
done < <(kubectl api-resources --namespaced=true 2>/dev/null | grep -v "events" | tail -n +2 | awk "{print $1}") \
wait \
'
}

const wrapper = () => {
  let terminalOut: string = 'initial value'
  const errorHandler = 
  child_process.execSync(bash.getResources, (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error('Error executing command:', err);
      return;
    }

    console.log('Stdout:', stdout);
    console.error('Stderr:', stderr);
  });

  child_process.execSync(bash.getResources, (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.error('Error executing command:', err);
      return;
    }

    console.log('Stdout:', stdout);
    console.error('Stderr:', stderr);
  });
  return terminalOut;
}

export default async function ShellCommand() {
  // const dataString = JSON.stringify(data);
  const res = wrapper();
  console.log("** RESPONSE FROM SHELL **")
  console.log(res)
  return (
    <div>
    </div>
  );
};
