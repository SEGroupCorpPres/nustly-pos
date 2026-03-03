import React from 'react';
import ClipboardIcon from "./icons/ClipboardIcon";

function SelectedTablesListItem({number, onRemove}) {
    return <li className={"w-full relative box-border"}>
        <button
            onClick={onRemove}
            className={`w-5 h-5 absolute -translate-y-1/2 translate-x right-0 flex items-center justify-center font-bold bg-white  text-red-500 rounded-full  text-xl`}>🅧
        </button>
        <div
            className={` has-checked:border-orange-300 has-checked:bg-orange-100 flex flex-row w-full justify-between items-center border rounded-xl border-gray-200  h-10 px-5 cursor-pointer`}>
            <h3 className={"text-xl"}>{number}</h3>
        </div>

    </li>;
}

function BottomSelectedTablesList({selectedTablesList, handleTableSelect, onHandleNextScreen,visibleStatus}) {
    function handleNextScreen() {
        onHandleNextScreen();
    }
    return (
        <div
            className={`fixed z-20 bottom-10 w-4/5 h-23  justify-start items-center bg-white py-3 px-8 rounded-2xl shadow-black shadow-xl/30 gap-5 ${visibleStatus}`}>
            <div className={"flex flex-row items-center gap-5 "}>
                <ClipboardIcon/>
                <h3 className={"font-bold text-xl text-black"}>Tables</h3>
                <hr className={"w-px h-10 bg-gray-400 ml-3"}/>
            </div>
            <div className={"flex flex-row justify-between items-center w-full gap-3"}>
                <ul className={"flex flex-row justify-start items-center gap-3"}>
                    {
                        selectedTablesList.map((tableObject, i) => {
                            return <SelectedTablesListItem
                                key={i}
                                number={tableObject.number}
                                onRemove={() => handleTableSelect(tableObject.id)}/>
                        })
                    }
                </ul>
                <button
                    onClick={() => handleNextScreen()}
                    className={`w-max px-15 h-15 flex items-center justify-center text-lg font-bold bg-amber-400`}>Next
                </button>
            </div>
        </div>
    );
}

export default BottomSelectedTablesList;