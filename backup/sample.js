const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const main = async () => {
  try {
    k8sApi.getServerResources().then((res) => {
      console.log("API resources:");
      res.body.groups.forEach((group) => {
        console.log(`  Group: ${group.name}`);
        group.versions.forEach((version) => {
          console.log(`    Version: ${version.name}`);
          version.resources.forEach((resource) => {
            console.log(`      - ${resource.name} (kind: ${resource.kind})`);
          });
        });
      });
    });
  } catch (err) {
    console.error(err);
  }
};

main();
