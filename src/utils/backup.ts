const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

const projectRoot = process.env.PROJECT_ROOT || process.cwd();
const baseUrl = `${projectRoot}/k8s-backups`;

/**
 *
 * @returns {Promise<string[]>} - List of api resources
 */
async function getApiResources(): Promise<string[]> {
  const { stdout } = await exec(
    "kubectl api-resources --namespaced=true 2>/dev/null | grep -v 'events' | tail -n +2 | awk '{print $1}'"
  );
  // console.log(stdout);
  const res = stdout
    .split("\n")
    .slice(1, -1) // omit bindings
    .map((line: string) => line.split(/\s+/)[0]);
  return res;
}

type NamespaceItemResource = {
  namespace: string;
  item: string;
  resource: string;
};
/**
 *
 * @param {string[]} resource
 * @returns {Array<Array<string>>} - Array of [namespace, item] pairs
 */
async function getItemInNamespace(resource: string) {
  const { stdout } = await exec(
    `kubectl get "${resource}" --all-namespaces 2>&1  | tail -n +1`
  );
  const res: Array<NamespaceItemResource> = stdout
    .split("\n")
    .slice(1, -1) // omit bindings
    .map((line: string) => {
      const [namespace, item] = line.split(/\s+/).slice(0, 2);
      return {
        namespace,
        item,
        resource,
      };
    });
  return res;
}

async function saveItemInNamespace({
  namespace,
  item,
  resource,
}: NamespaceItemResource) {
  console.log(namespace, item, resource);
  await exec(`mkdir -p "${baseUrl}/${namespace}/${resource}"`);
  const { stdout } = await exec(
    `kubectl get "${resource}" -n "${namespace}" "${item}" -o yaml > "${baseUrl}/${namespace}/${resource}/${item}.yaml" &`
  );
}

/**
 * Saves backup to yaml files in ./k8s-backups
 */
export async function saveClusterToYaml() {
  try {
    const apiResources = await getApiResources();
    for (const resource of apiResources) {
      const toSave = await getItemInNamespace(resource);
      for (const pair of toSave) {
        saveItemInNamespace(pair);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export async function saveClusterToSingleYaml() {
  try {
    await exec(`mkdir -p "${baseUrl}"`);
    await exec(`kubectl get all --all-namespaces -o yaml > ${baseUrl}/cluster-state.yaml`);
    console.log("Backup to file completed.")
  } catch (error) {
    console.error(error);
  }
}

export async function ls() {
  const { stdout } = await exec(`ls`);
  return stdout;
}
