"use client"

import { MouseEventHandler } from "react";

type ClusterProp = {
    id: string;
    text: string;
}

export default function Cluster(props: ClusterProp) {
    const handleViewBtnCLicked = () => {
        alert('View btn clicked!')
    }
    return (
        <div className="activeCluster">
            <div className="clusterInfo">
                {props.text}
            </div>
            <div>
                <button onClick={handleViewBtnCLicked}>View</button>
            </div>
        </div>
    )
}