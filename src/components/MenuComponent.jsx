import {menuList} from "../assets/MockData";
import React from "react";
import MenuItemComponent from "./MenuItemComponent";


function MenuComponent(props) {
    return <div className={"w-full grid grid-cols-4 gap-x-16 gap-y-10 mt-4 overflow-y-auto bg-transparent pb-10"}>
        {menuList.map(item => <MenuItemComponent key={item.id} item={item}/>)}
    </div>;
}

export default MenuComponent;