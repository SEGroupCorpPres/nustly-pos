import React from "react";

function SegmentItem({index, title}) {
    return <div className={"flex flex-row justify-start items-center w-full gap-3"}>
        <h2 className={"rounded-full bg-gray-500 text-white w-10 h-10 flex items-center justify-center"}>{index}</h2>
        <h2 className={"text-black font-bold"}>{title}</h2>
    </div>;
}

export default SegmentItem;