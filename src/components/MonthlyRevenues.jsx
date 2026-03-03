import React from 'react';
import revenues from "../screens/mockRevenue";
import RevenueItem from "./RevenueItem";


function MonthlyRevenues(props) {
    return (
        <ul className={"flex flex-row justify-center items-center mt-3 text-justify w-full gap-5"}>
            {revenues.map((item, i) => {
                return (
                    <RevenueItem key={i} item={item}/>
                )
            })}
        </ul>
    );
}

export default MonthlyRevenues;