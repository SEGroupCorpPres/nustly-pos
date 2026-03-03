import React from 'react';
import {Column, Columns, Grid} from "@syncfusion/react-grid";
import mockOrders from "../screens/mockOrders";
import SearchIcon from "./icons/SearchIcon";

function categoryColor({category}) {
    switch (category) {
        case "Snacks":
            return "bg-orange-100 text-orange-800 border-2 border-orange-200 rounded-full";
        case "Desserts":
            return "bg-blue-100 text-blue-800 border-2 border-blue-200 rounded-full";
        case "Meals":
            return "bg-red-100 text-red-800 border-2 border-red-200 rounded-full";
        default:
            return "bg-green-100 text-green-800 border-2 border-green-200 rounded-full";
    }
}

function checkHome({isHome}) {
    return !isHome ? "hidden" : "flex";
}
function OrdersList({isHome}) {
    return (
        <div
            className={"flex flex-col w-full justify-content-center align-middle h-auto border border-gray-200 bg-white p-6 gap-5"}>
            <div className={"flex flex-row justify-between items-center"}>
                <h2 className={"font-bolder text-2xl"}>Orders</h2>
                <a href="/" className={`text-gray-700 ${checkHome({isHome: isHome})}`}>View All</a>
            </div>
            <div className={"flex flex-row justify-between items-center"}>
                <span>
                    <button className={"px-3 py-2 h-10 text-center bg-black text-white"}>All</button>
                    <button className={" px-3 py-2 h-10 text-center bg-gray-500 text-white"}>Last Month</button>
                </span>
                <span className={"flex flex-row items-center justify-start w-1/4 px-5  ms-4 bg-gray-100"}>
                        <SearchIcon/>
                        <input type="text" className={" h-11 bg-gray-100 px-4"}
                               placeholder={"Search..."}/>
                    </span>
            </div>
            <ul className={"flex flex-col w-full justify-content-center align-middle h-auto"}>
                <li className={"flex flex-row align-middle border-y border-gray-200"}>
                    <button className={"w-1/6 text-left"}>
                        Transaction ID
                    </button>
                    <button className={"w-1/6 text-left"}>
                        Date
                    </button>
                    <button className={"w-1/6 text-left"}>
                        Amount
                    </button>
                    <button className={"w-1/6 text-left"}>
                        Orders
                    </button>
                    <button className={"w-1/6 text-left"}>
                        Category
                    </button>
                    <button className={"w-1/6 text-left"}>
                        Menu
                    </button>
                </li>
                {
                    mockOrders.map((order, index) => {
                        return (
                            <li key={index} className={"flex flex-row align-middle items-center border-b border-gray-200"}>
                                <p className={"w-1/6 h-10 text-left flex items-center"}>{order.transactionId}</p>
                                <p className={"w-1/6 h-10 text-left flex items-center"}>{order.date}</p>
                                <p className={"w-1/6 h-10 text-left flex items-center"}>{order.amount}</p>
                                <p className={"w-1/6 h-10 text-left flex items-center"}>{order.qty}</p>
                                <p className={"w-1/6 h-10 text-left flex items-center"}><span className={`${categoryColor({category: order.category})} px-3 py-1 flex flex-row`}>● {order.category}</span> </p>
                                <p className={"w-1/6 h-10 text-left flex items-center"}>{order.menu}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default OrdersList;