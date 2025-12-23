import React, {useState} from 'react';
import SegmentItem from "../components/SegmentItem";
import DotList from "../components/DotList";
import SelectableDinningTable from "../components/SelectableDinningTable";
import {TableStatus, TableStatusRowComponent} from "../components/TableStatus";
import {tablesObjectList} from "../assets/MockData";
import BottomSelectedTablesList from "../components/BottomSelectedTablesList";

function TableRowListComponent({tableStartName, onSelectTable}) {
    let filteredTableObjectList = tablesObjectList && tablesObjectList.length > 0 ? tablesObjectList.filter(tableObject => tableObject.number.includes(tableStartName)) : [];

    function handleSelectTable(tableId, status) {
        console.log("click table via tableRowLIstComponent")
        if (status === TableStatus.available) onSelectTable(tableId);
    }

    return <div className={`flex flex-row w-full justify-between items-center`}>
        {
            filteredTableObjectList.map((tableObject, index) => {
                return <SelectableDinningTable
                    selectTable={() => handleSelectTable(tableObject.id, tableObject.status)}
                    key={index}
                    chairsCount={tableObject.chairsCount}
                    number={tableObject.number}
                    status={tableObject.status}/>
            })
        }
    </div>
}

function DineInScreen() {
    const [selectedTablesList, setSelectedTablesList] = useState([]);

    function handleTableSelect(tableId) {
        console.log("table clicked in dineInScreen")
        let isSelected = selectedTablesList.find(tableObject => tableObject.id === tableId);
        if (isSelected) {
            setSelectedTablesList(prevState => prevState.filter(tableObject => tableObject.id !== tableId));
        } else {
            let selectedTable = tablesObjectList.find(tableObject => tableObject.id === tableId);
            setSelectedTablesList(prevState => [...prevState, selectedTable]);
        }
    }

    return (
        <section className={"flex h-max w-dvw  flex-row justify-center items-start"}>
            <aside className={"flex flex-col justify-start items-center w-1/5 px-10 py-10 box-border"}>
                <SegmentItem index={1} title={"Choose a Table"}/>
                <DotList/>
                <SegmentItem index={2} title={"Select Menu"}/>
                <DotList/>
                <SegmentItem index={3} title={"Checkout"}/>
            </aside>
            <div className={"bg-white w-full h-full p-15 box-border"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <h1 className={"text-5xl text-black font-bold"}>Choose a Table</h1>
                    <TableStatusRowComponent/>
                </div>
                <div className={"flex flex-col justify-between items-center gap-10 mt-15 mb-20"}>
                    <TableRowListComponent tableStartName={"A"} onSelectTable={handleTableSelect}/>
                    <TableRowListComponent tableStartName={"B"} onSelectTable={handleTableSelect}/>
                    <TableRowListComponent tableStartName={"C"} onSelectTable={handleTableSelect}/>
                    <TableRowListComponent tableStartName={"D"} onSelectTable={handleTableSelect}/>
                </div>
            </div>
            <BottomSelectedTablesList selectedTablesList={selectedTablesList} handleTableSelect={handleTableSelect}/>
        </section>
    );
}

export default DineInScreen;