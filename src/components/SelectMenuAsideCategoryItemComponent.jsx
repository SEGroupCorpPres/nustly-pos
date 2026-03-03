import React from "react";
import BeveragesIcon from "./icons/BeveragesIcon";
import FoodsIcon from "./icons/FoodsIcon";
import AppetizerIcon from "./icons/AppetizerIcon";
import BakeriesIcon from "./icons/BakeriesIcon";
import CoffeeIcon from "./icons/CoffeeIcon";

function SelectMenuAsideCategoryItemComponent({category}) {
    function selectedCategory({id}) {
        switch (id) {
            case 2:
                return <BeveragesIcon color={"black"} size={"64"}/>
            case 3:
                return <FoodsIcon color={"black"} size={"64"}/>
            case 4:
                return <AppetizerIcon color={"black"} size={"64"}/>
            case 5:
                return <BakeriesIcon color={"black"} size={"64"}/>
            default:
                return <CoffeeIcon color={"black"} size={"64"}/>
        }
    }

    return <li className={"flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-amber-400 w-32"}>
        {selectedCategory({id: category.id})}
        <h3 className={"text-lg"}>{category.title}</h3>
    </li>;
}

export default SelectMenuAsideCategoryItemComponent