import {menuList} from "../assets/MockData";
import React from "react";
import SearchIcon from "./icons/SearchIcon";

function SelectMenuNavComponent({onHandleShowCartComponent}) {
    function showCartComponent() {
        onHandleShowCartComponent();
    }

    return <nav className={"flex flex-row items-center justify-between w-[calc(100vw-550px)] box-border"}>
        <div className={"flex items-center w-5/6 flex-row bg-white h-15 border-b border-gray-300 "}>
                        <span
                            className={"flex flex-row items-center justify-start w-1/4 px-5 bg-white border-e border-b border-gray-300"}>
                        <SearchIcon/>
                        <input type="text" className={"h-15 bg-white px-4"}
                               placeholder={"Search..."}/>
                    </span>
            <ul className={"flex flex-row px-5 h-full justify-start items-center gap-4 overflow-x-auto"}>
                <li className={"w-max px-4 py-1 border rounded-full border-gray-300 flex-shrink-0"}>All</li>
                {menuList.map(item => <li key={item.id}
                                          className={"w-max px-4 py-1 border rounded-full  flex-shrink-0 border-gray-300"}>{item.title}</li>)}
            </ul>
        </div>
        <button onClick={() => showCartComponent()}
                className={"font-medium text-black px-15 py-3 bg-amber-400"}>Checkout
        </button>
    </nav>;
}

export default SelectMenuNavComponent;