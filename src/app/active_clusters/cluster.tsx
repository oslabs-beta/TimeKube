"use client"

import Link from 'next/link';
import {MouseEventHandler} from "react";

type ClusterProp = {
  id: string;
  text: string;
}

export default function Cluster(props: ClusterProp) {
  const handleViewBtnCLicked = () => {
    console.log('View btn clicked!');
  }
  return (
    <div className="activeCluster">
      <div>
        <Link href={`../dashboard`}>
          <button className="btn btn-lg btn-wide text-white font-extrabold bg-gray-800" onClick={handleViewBtnCLicked}>
            {/*<Link href={`../cluster_details/?id=${props.id}`}>{props.text}</Link>*/}
            <Link href={`../dashboard`}>{props.text}</Link>
          </button>
        </Link>
      </div>
    </div>
  )
}