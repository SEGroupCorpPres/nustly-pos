import React from 'react';
import SelectMenuAsideCategoryComponent from "./SelectMenuAsideCategoryComponent";
import {categories, menuList} from "../assets/MockData";
import SelectMenuNavComponent from "./SelectMenuNavComponent";
import MenuComponent from "./MenuComponent";


function SelectMenuScreenComponent({onHandleShowCartComponent, onHandleHideCartComponent}) {
    return (<div className={"flex h-[calc(100vh-65px)] w-5/6 right-0"}>
        <SelectMenuAsideCategoryComponent categories={categories}/>
        <div className={"h-auto bg-gray-100 w-full pt-8 px-8 pe-20 flex flex-col justify-start items-start gap-5"}>
            <SelectMenuNavComponent onHandleShowCartComponent={onHandleShowCartComponent}/>
            <MenuComponent/>
        </div>
    </div>);
}

export default SelectMenuScreenComponent;