import { db } from "@/utils/appdb-kysely";
import TimelineBeginning from "./TimelineBeginning";
import TimelineEnd from "./TimelineEnd";

export default async function ClusterSnapshotsPage({ params }) {
  const currentClusterId = params.clusterId;
  const snapshots = await db
    .selectFrom("backups")
    .selectAll()
    .where("clusterId", "=", currentClusterId)
    .orderBy("creationDate desc")
    .execute();
  if (!snapshots) {
    throw new Error("No snapshots found!");
  }
  return (
    <div className="">
      <div className="text-4xl  text-white font-extrabold">
        Snapshots for Cluster {`${currentClusterId}`}
      </div>
      <div className="flex flex-wrap justify-around content-evenly">
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
                <div className="timeline-end timeline-box bg-primary">{s.clusterId}</div>
                <hr className=""/>
              </li>
            );
          })}
          <TimelineEnd />
        </ul>
      </div>
    </div>
  );
}

export type SnapshotInfo = {
  id: string;
  clusterId: string;
  createdAt: string;
  status: string;
  size: string;
  type: string;
  url: string;
};
