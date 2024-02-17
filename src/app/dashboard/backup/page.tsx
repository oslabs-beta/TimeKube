"use client";

import { NextPage } from "next";
import Cluster from "../cluster/cluster";

const Page: NextPage = () => {
  const clusterIds = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className=" text-6xl text-white font-extrabold">
        Choose a cluster to backup
      </div>
      <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center align-middle">
        {clusterIds.map((id) => (
          <Cluster id={id} text={"Cluster " + id} suffix={"backup"} />
        ))}
      </div>
    </div>
  );
};

export default Page;
