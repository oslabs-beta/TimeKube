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
        <div id={`${props.id}`} className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer`} onClick={() => handleOptionClicked()}>
            {props.text}
        </div>
    )
}