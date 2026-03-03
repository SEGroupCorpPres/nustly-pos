import React from 'react';

const dotItem = ["-", "-", "-", "-", "-"]

function DotList(props) {
    return <ul className={"gap-1 w-full h-15 flex flex-col justify-start items-start ps-4"}>
        {dotItem.map((item, i) => <li key={i} className={"text-black"}><p className={"h-1"}>-</p></li>)}
    </ul>;
}

export default DotList;