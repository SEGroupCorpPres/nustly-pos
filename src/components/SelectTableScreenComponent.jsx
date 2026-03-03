import React, {useState} from "react";
import TableRowListComponent from "./TableRowListComponent";
import {TableStatusRowComponent} from "./TableStatus";

function SelectTableScreenComponent({onSelectTable}) {
    return <div className={"flex flex-col bg-white w-5/6 h-[calc(100vh-60px)] p-15"}>
        <div className={"flex flex-row justify-between items-center shrink-0"}>
            <h1 className={"text-5xl text-black font-bold"}>Choose a Table</h1>
            <TableStatusRowComponent/>
        </div>
        <div
            className={"flex flex-col justify-between  items-center gap-10 mt-15 overflow-y-auto pb-40"}>
            <TableRowListComponent tableStartName={"A"} onSelectTable={onSelectTable}/>
            <TableRowListComponent tableStartName={"B"} onSelectTable={onSelectTable}/>
            <TableRowListComponent tableStartName={"C"} onSelectTable={onSelectTable}/>
            <TableRowListComponent tableStartName={"D"} onSelectTable={onSelectTable}/>
        </div>
    </div>;
}

export default SelectTableScreenComponent;