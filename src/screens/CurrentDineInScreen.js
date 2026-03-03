import React from "react";
import SelectTableScreenComponent from "../components/SelectTableScreenComponent";
import SelectMenuScreenComponent from "../components/SelectMenuScreenComponent";
import Checkout from "../components/Checkout";

function CurrentDineInScreen({currentScreen, handleTableSelect, onHandleShowCartComponent, onHandleHideCartComponent}) {
    switch (currentScreen) {
        case 'select-menu':
            return <SelectMenuScreenComponent onHandleShowCartComponent={onHandleShowCartComponent}
                                              onHandleHideCartComponent={onHandleHideCartComponent}/>
        case 'checkout':
            return <Checkout/>
        default:
            return <SelectTableScreenComponent onSelectTable={handleTableSelect}/>
    }
}

export default CurrentDineInScreen;