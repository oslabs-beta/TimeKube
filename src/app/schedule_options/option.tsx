"use client"

import { MouseEventHandler } from "react";

type ScheduleOptionProp = {
    id: string;
    text: string;
    // gridProperty: string;
    handleOptionClicked(id: string): void
}

export default function Option(props: ScheduleOptionProp) {

    const handleOptionClicked = () => {
        props.handleOptionClicked(props.id);
    }

    return (
        <div id={`${props.id}`} className="btn btn-lg text-white font-extrabold bg-gray-800" onClick={() => handleOptionClicked()}>
            {props.text}
        </div>
    )
}