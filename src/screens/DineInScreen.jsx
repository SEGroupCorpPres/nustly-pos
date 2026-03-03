import React, {useState} from 'react';
import SegmentItem from "../components/SegmentItem";
import DotList from "../components/DotList";
import SelectableDinningTable from "../components/SelectableDinningTable";
import {TableStatus, TableStatusRowComponent} from "../components/TableStatus";
import {tablesObjectList} from "../assets/MockData";
import BottomSelectedTablesList from "../components/BottomSelectedTablesList";
import CurrentDineInScreen from "./CurrentDineInScreen";

function DineInScreen({handleShowCartComponent, handleHideCartComponent}) {
    const [currentScreen, setCurrentScreen] = useState('select-menu');
    const [selectedTablesList, setSelectedTablesList] = useState([]);
    const [bottomSelectedTablesListStatus, setBottomSelectedTablesListStatus] = useState("hidden");

    // const screenList = ["choose-table", "select-menu", "checkout"];

    function nextScreen() {
        if (bottomSelectedTablesListStatus === "flex") {
            setBottomSelectedTablesListStatus("hidden");
        }
        if (currentScreen === 'choose-table') {
            setCurrentScreen('select-menu');
        }
        if (currentScreen === 'select-menu') {
            setCurrentScreen('checkout');
        }
    }

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
        <section className={"flex h-[calc(100vh-60px)] w-screen flex-row justify-center items-start overflow-hidden"}>
            <aside
                className={"flex flex-col justify-start items-center w-1/6 px-10 py-10 box-border h-auto top-20 left-0"}>
                <SegmentItem index={1} title={"Choose a Table"} bgColor={"bg-black"}/>
                <DotList/>
                <SegmentItem index={2} title={"Select Menu"}
                             bgColor={currentScreen === 'select-menu' || currentScreen === 'checkout' ? "bg-black" : "bg-gray-400"}/>
                <DotList/>
                <SegmentItem index={3} title={"Checkout"}
                             bgColor={currentScreen === 'checkout' ? "bg-black" : "bg-gray-400"}/>
            </aside>
            <CurrentDineInScreen onHandleShowCartComponent={handleShowCartComponent}
                                 onHandleHideCartComponent={handleHideCartComponent} currentScreen={currentScreen}
                                 handleTableSelect={handleTableSelect}/>
            <BottomSelectedTablesList selectedTablesList={selectedTablesList} handleTableSelect={handleTableSelect}
                                      onHandleNextScreen={() => nextScreen(0)}
                                      visibleStatus={bottomSelectedTablesListStatus}/>
        </section>
    );
}

export default DineInScreen;