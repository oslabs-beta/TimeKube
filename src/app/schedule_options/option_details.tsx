"use client"

import { MouseEventHandler } from "react";

type OptionDetailsProp = {
    id: string;
    props: any;
}

export default function OptionDetails(props: OptionDetailsProp) {

    return (
        <div>
            Loading option #{props.id}
        </div>
    )
}