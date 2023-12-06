"use client"

import Link from 'next/link';
import { MouseEventHandler } from "react";

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
            <div className="clusterInfo">
                {props.text}
            </div>
            <div>
                <button onClick={handleViewBtnCLicked}>
                    <Link href="../cluster_details/">View</Link>
                </button>
            </div>
        </div>
    )
}