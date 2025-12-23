import React from "react";

function TSComponent({title, color}) {
    return <li className={"flex flex-row  items-center gap-2"}>
        <div className={`${color}  w-3 h-3 rounded-full`}></div>
        <p>{title}</p>
    </li>;
}

const TableStatus = Object.freeze({
    available: "Available",
    reserved: "Reserved",
    filled: "Filled",
    availableSoon: "Available Soon",
});
const tableStatusList = [
    {
        "title": TableStatus.available,
        "color": "bg-green-500"
    },

    {
        "title": TableStatus.reserved,
        "color": "bg-red-500"
    },
    {
        "title": TableStatus.filled,
        "color": "bg-gray-500"
    },
    {
        "title": TableStatus.availableSoon,
        "color": "bg-orange-500"
    }
];

function TableStatusRowComponent() {
    return (<ul className={"flex flex-row gap-10"}>
        {
            tableStatusList.map((item, index) => <TSComponent title={item.title} color={item.color} key={index}/>)
        }
    </ul>)

}

export {TableStatusRowComponent, TableStatus};