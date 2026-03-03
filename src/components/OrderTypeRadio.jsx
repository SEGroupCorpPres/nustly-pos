import React from 'react';
import TakeAwayIcon from "./icons/TakeAwayIcon";

function OrderTypeRadio({title, value, group, children }) {
    return (
        <label className={"has-checked:border-orange-300 has-checked:bg-orange-100 flex flex-row w-full justify-between items-center border-2 border-gray-200  h-15 px-5 cursor-pointer"}>
            <span className={"flex flex-row justify-start gap-3 items-center w-1/2"}>
                {children}
                <h2 className={"text-2xl"}>{title}</h2>
            </span>
            <input
                type="radio"
                className={"appearance-none w-5 h-5 border border-gray-500 bg-white rounded-full checked:border-0 checked:bg-orange-500 transition relative before:content-[''] before:absolute before:inset-0 before:flex before:items-center before:justify-center\n" +
                "checked:before:content-['✓'] checked:before:text-white checked:before:text-lg checked:before:font-bold"}
                value={value}
                name={group}/>
        </label>
    );
}

export default OrderTypeRadio;