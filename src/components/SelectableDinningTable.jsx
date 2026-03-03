import React from 'react';
import {TableStatus} from "./TableStatus";

function Chair() {
    return <div className={"h-5 w-12 bg-gray-200 rounded-md"}></div>;
}

function MiddleChair({bgColor}) {
    return <div className={`h-12 w-5 ${bgColor}  rounded-md`}></div>;
}

function DinningTable({number, status, chairsCount = 8, selectTable}) {
    function handleClick() {
        console.log("clicked")
        selectTable()
    }

    let tBgColor = () => {
        switch (status) {
            case TableStatus.reserved:
                return "bg-red-500"
            case TableStatus.filled:
                return "bg-gray-500"
            case TableStatus.availableSoon:
                return "bg-orange-500"
            default:
                return "bg-green-500"
        }
    }
    const width = chairsCount === 10 && chairsCount !== 2 ? "w-60" : "w-30";
    return <div onDoubleClick={handleClick}
                className={`h-30 ${width} ${tBgColor()} rounded-md flex flex-col items-center justify-center`}><h1
        className={"font-bold text-black text-2xl"}>{number}</h1></div>;
}

function Chairs({chairsCount = 8}) {
    return <div className={"flex flex-row gap-2"}>
        {
            chairsCount === 8 ? <Chair/> : chairsCount === 4 || chairsCount === 2 ? null : (
                <div className={"flex flex-row gap-2"}><Chair/> <Chair/> <Chair/></div>)
        }
        {/*<Chair/>*/}
        <Chair/>
    </div>;
}

function MiddleChairs({chairsCount = 8}) {
    let bgColor = chairsCount === 2 ? "bg-transparent" : "bg-gray-200"
    return <div className={"flex flex-col items-center gap-2"}>
        {
            chairsCount === 8 ? <MiddleChair bgColor={bgColor}/> : null
        }
        <MiddleChair bgColor={bgColor}/>
    </div>;
}

function SelectableDinningTable({number, status, chairsCount = 8, selectTable}) {
    return (
        <div className={"flex flex-col items-center gap-2 cursor-pointer"}>
            {/*top chairs*/}
            <Chairs chairsCount={chairsCount}/>
            {/*    middle chairs and table*/}
            <div className={"flex flex-row items-center gap-2"}>
                <MiddleChairs chairsCount={chairsCount}/>
                <DinningTable chairsCount={chairsCount} number={number} status={status} selectTable={selectTable}/>
                <MiddleChairs chairsCount={chairsCount}/>
            </div>
            {/*bottom chairs*/}
            <Chairs chairsCount={chairsCount}/>
        </div>
    );
}

export default SelectableDinningTable;