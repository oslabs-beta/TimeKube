import { NextPage } from "next";
import Cluster from "../cluster/cluster";
import { getBackups } from "@/app/api/backup/backup.action";
import { db } from "@/utils/appdb-kysely";
import TimelineBeginning from "../cluster/[clusterId]/snapshots/TimelineBeginning";
import TimelineEnd from "../cluster/[clusterId]/snapshots/TimelineEnd";
import Link from "next/link";

export default async function ClusterSnapshotsPage({ params }) {
  const snapshots = await db
    .selectFrom("backups")
    .selectAll()
    .orderBy("creationDate desc")
    .execute();
  if (!snapshots) {
    throw new Error("No snapshots found!");
  }

  const clusterIds = Array.from(new Set(snapshots.map((b) => b.clusterId)));

  return (
    <div className="mx-auto mt-10 grid grid-rows-12 grid-flow-row gap-10">
      <div className="text-5xl  font-extrabold row-span-1 justify-self-center">
        Select a cluster to view snapshots
      </div>
      {/* <div className="flex flex-wrap justify-start content-evenly row-span-5 row-start-2"> */}
      <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center align-middle">
        {clusterIds
          ? clusterIds.map((b) => (
              <Cluster
                id={b ?? "Error fetching cluster"}
                text={"" + b}
                suffix={"snapshots"}
              />
            ))
          : "No snapshots found!"}
      </div>
      <div className="text-4xl  font-extrabold row-span-1 justify-self-center">
        Or view a timeline of all snapshots
      </div>
      <div className="flex flex-wrap justify-around content-evenly row-span-5">
        <ul className="timeline timeline-vertical">
          <TimelineBeginning />
          {snapshots.map((s) => {
            return (
              <li>
                <hr className="" />
                <div className="timeline-start">{s.creationDate}</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box bg-primary">
                  <Link href={`/dashboard/cluster/${s.clusterId}/snapshots`}>
                    {s.clusterId}
                  </Link>
                </div>
                <hr className="" />
              </li>
            );
          })}
          <TimelineEnd />
        </ul>
      </div>
    </div>
  );
}
