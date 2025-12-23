import React from 'react';
import OrdersList from "../components/OrdersList";

function OrdersScreen(props) {
    return (
        <div className={"flex flex-col justify-center items-center px-10 py-10 gap-3"}>
            <OrdersList isHome={false}/>
            <button className={"w-full h-12 bg-white text-black font-bold"}>Load More</button>
        </div>
    );
}

export default OrdersScreen;