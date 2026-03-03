    import React, {useState} from 'react';
import DinningIcon from "./icons/DinningIcon";
import TakeAwayIcon from "./icons/TakeAwayIcon";
import OrderTypeRadio from "./OrderTypeRadio";
import OrderTypeRadioGroup from "./OrderTypeRadioGroup";
import {Link, useNavigate} from "react-router";

function NewOrderAlertComponent({isShowNewOrderAlert, hideNewOrderAlert}) {
    const [isDelivery, setIsDelivery] = useState(false);
    const [orderType, setOrderType] = useState("");

    const navigate = useNavigate();

    const handleNextPageLink = () => {
        // 1. Side-effect (allowed in event handler)
        handleHideNewOrderAlert();
        // 2. Deterministic route resolution
        let next = "/";
        if (orderType === "dine_in") next = "/dine-in";
        else if (isDelivery) next = "/delivery";
        else if (orderType === "take_away") next = "/take-away";
        // 3. Navigate
        navigate(next);
    };


    function handleHideNewOrderAlert() {
        hideNewOrderAlert()
    }

    function showNewOrderAlert() {
        console.log(`showNewOrderAlert ${isShowNewOrderAlert}`);
        return isShowNewOrderAlert ? "flex" : "hidden";
    }

    function handleCheckDelivery() {
        if (orderType === "take_away") {
            setIsDelivery(!isDelivery);
        }
        console.log(isDelivery);
    }

    function handleSetOrderType({handleOrderType}) {
        setOrderType(handleOrderType);
        console.log(handleOrderType);
    }

    function handleCheckOrderType() {
        console.log(orderType)
        if (orderType === "dine_in" || orderType === "take_away") {
            return "bg-orange-500 transition text-black border-none";
        } else {
            return "bg-white transition text-orange-400 border-2 border-gray-400";
        }
    }

    function setDeliveryCheckBtnStyle() {
        console.log(isDelivery);
        if (isDelivery) {
            return "bg-orange-100 transition  text-black border-orange-300";
        } else {
            return "bg-white transition  text-black ";
        }
    }

    return (
        <div
            className={`${showNewOrderAlert()} w-full h-screen bg-gray-900/50 absolute z-20 top-0 left-0  justify-center items-center`}>
            <form className="flex flex-col items-start justify-start h-auto w-1/4 bg-white p-6 gap-3">
                <OrderTypeRadioGroup
                    options={[
                        {label: "Dine In", value: "dine_in"},
                        {label: "Take Away", value: "take_away"},
                    ]}
                    value={orderType}
                    onChange={(e) => handleSetOrderType({handleOrderType: e.target.value})}
                />
                <div onClick={handleCheckDelivery}
                     className={`has-checked:border-orange-300 has-checked:bg-orange-100 flex flex-row w-full justify-between items-center border-2 border-gray-200  h-15 px-5 cursor-pointer ${setDeliveryCheckBtnStyle()}`}>
                    <h3 className={"text-xl"}>Delivery</h3>
                </div>
                <div className={"flex flex-row gap-3 items-center w-full mt-4"}>
                    <button onClick={() => handleHideNewOrderAlert()}
                            className={"w-1/2 h-15 text-orange-400 border-2 border-gray-400 text-lg font-bold"}>Cancel
                    </button>
                    <button onClick={handleNextPageLink}
                          className={`w-1/2 h-15 flex items-center justify-center text-lg font-bold ${handleCheckOrderType()}`}>Next</button>
                </div>
            </form>
        </div>
    );
}

export default NewOrderAlertComponent;