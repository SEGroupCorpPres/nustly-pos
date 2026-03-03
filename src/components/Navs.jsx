import React from 'react';
import SearchIcon from "./icons/SearchIcon";
import NotifyIcon from "./icons/NotifyIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import {Link, NavLink} from "react-router";

const navItems = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Orders",
        link: "/orders",
    },
    {
        title: "Customers",
        link: "/customers",
    },
    {
        title: "Cashier",
        link: "/cashier",
    },
]

const accountMenuItems = [
    {
        title: "Starscream",
        link: "/profile",
    },
    {
        title: "Account",
        link: "/account",
    },
    {
        title: "Settings",
        link: "/settings",
    },
    {
        title: "Logout",
        link: "/logout",
    },
]

function Navs({handleNewOrderAlert}) {
    const [showAccountMenu, setShowAccountMenu] = React.useState(false);

    function handleShowNewOrderAlert() {
        console.log("handleShowNewOrderAlert");
        handleNewOrderAlert()
    }

    function handleShowAccountMenu() {
        setShowAccountMenu(!showAccountMenu);
    }

    function changeStatusAccMenu() {
        if (showAccountMenu) {
            return "flex"
        } else {

            return "hidden"
        }
    }

    return (
        <div className="w-full h-15 bg-white  p-4 flex flex-row justify-between items-center">
                    <span className={"flex flex-row items-center justify-start w-1/2 px-5  ms-4 me-10 bg-gray-100"}>
                        <SearchIcon/>
                        <input type="text" className={" h-11 bg-gray-100 px-4"}
                               placeholder={"Search..."}/>
                    </span>
            <ul className={"flex flex-row  items-center justify-between w-full"}>
                {navItems.map(item => {
                    return <li className={"flex flex-row  items-center justify-center"}>
                        <NavLink to={item.link} href={`${item.link}`}
                              className={"font-medium text-gray-500 active:text-blue-500 hover:text-black focus:text-black"}>{item.title}</NavLink>
                    </li>
                })}
                <li className={"flex flex-row  items-center justify-center"}>
                    <button onClick={() => handleShowNewOrderAlert()} href=""
                            className={"font-medium text-black px-5 py-3 bg-amber-400"}>New Order
                    </button>
                </li>
            </ul>
            <div className={"mx-10"}>

                <NotifyIcon/>
            </div>

            <div onClick={handleShowAccountMenu}  className={"flex flex-row  items-center justify-between"}>
                <div
                     className={"flex flex-col justify-center items-center w-10 bg-red-500 h-10 rounded-full"}>
                    <h3 className={"font-bold"}>S</h3>
                </div>
                <div className="flex flex-col  items-center justify-between">
                    <ArrowDownIcon/>
                    <ul className={`${changeStatusAccMenu()} flex-col  items-start justify-center absolute bg-blue-500 px-5 top-15 right-10`}>
                        {
                            accountMenuItems.map(item => <li><a href={`${item.link}`}>{item.title}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navs;