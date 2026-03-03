import React from "react";
import SelectMenuAsideCategoryItemComponent from "./SelectMenuAsideCategoryItemComponent";

function SelectMenuAsideCategoryComponent({categories,}) {
    return <aside className={"h-auto bg-white border border-gray-200 py-10"}>
        <ul className={"flex flex-col gap-3 justify-center items-center"}>
            {
                categories.map((item, i) => {
                    return <SelectMenuAsideCategoryItemComponent key={i}
                                                                 category={item}/>
                })
            }
        </ul>
    </aside>;
}

export default SelectMenuAsideCategoryComponent;