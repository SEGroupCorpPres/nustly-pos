import React from 'react';
import MonthlyRevenues from "../components/MonthlyRevenues";
import OrdersList from "../components/OrdersList";

function HomeScreen(props) {
    return (
        <section className={"flex flex-col justify-center items-start px-10 py-10 gap-3 h-full w-full"}>
            <h1 className={"font-bold text-black text-5xl "}>Hello <span
                className={"text-amber-500"}> Starscream</span> 👋</h1>
            <MonthlyRevenues/>
            <OrdersList isHome={true}/>
        </section>
    );
}

export default HomeScreen;