import { NextPage } from "next";
import Cluster from "../cluster/cluster";
import { getBackups } from "@/app/api/backup/backup.action";

const Page: NextPage = async () => {
  const backups = await getBackups();
  const clusterIds = Array.from(new Set(backups.map((b) => b.clusterId)));

  return (
    <div className="">
      <div className="text-8xl  text-white font-extrabold">
        Choose a cluster to view snapshots
      </div>
      <div className="flex flex-wrap justify-around content-evenly">
        {clusterIds
          ? clusterIds.map((b) => (
              <Cluster
                id={b ?? "Error fetching cluster"}
                text={"Cluster " + b}
                suffix={"snapshots"}
              />
            ))
          : "No snapshots found!"}
      </div>
    </div>
  );
};

export default Page;
