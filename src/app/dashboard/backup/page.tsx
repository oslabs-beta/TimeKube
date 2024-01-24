"use client";

import { NextPage } from "next";
import Cluster from "../cluster/cluster";

const Page: NextPage = () => {
  const clusterIds = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" text-6xl text-white font-extrabold">
        Choose a cluster to backup
      </div>
      <div className="grid grid-cols-3 gap-48 mt-36">
        {clusterIds.map((id) => (
          <Cluster id={id} text={"Cluster " + id} suffix={"backup"} />
        ))}
      </div>
    </div>
  );
};

export default Page;
