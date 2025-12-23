import "./App.css";
import AppNavbar from "./components/AppNavbar";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import NewOrderAlertComponent from "./components/NewOrderAlertComponent";
import {useState} from "react";
import {Route, Routes} from "react-router";
import LoginScreen from "./screens/LoginScreen";
import PinCodeScreen from "./screens/PinCodeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import VerificationScreen from "./screens/VerificationScreen";
import CustomersScreen from "./screens/CustomersScreen";
import CashierScreen from "./screens/CashierScreen";
import DineInScreen from "./screens/DineInScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import TakeAwayScreen from "./screens/TakeAwayScreen";

function App() {
    const [showNewOrderAlert, setShowNewOrderAlert] = useState(false);

    function handleNewOrderAlert() {
        console.log(`handle ${showNewOrderAlert}`);
        setShowNewOrderAlert(!showNewOrderAlert);
    }

    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-screen  bg-gray-100 relative box-border">
            {/* Start Navbar */}
            <AppNavbar handleNewOrderAlert={handleNewOrderAlert}/>
            {/* End Navbar */}

            {/*Start the HomeScreen Section*/}
            <main className={"mt-15 w-full h-full "}>
                {/*    Start Revenue Section*/}
                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="/orders" element={<OrdersScreen/>}/>
                    <Route path="/customers" element={<CustomersScreen/>}/>
                    <Route path="/cashier" element={<CashierScreen/>}/>
                    <Route path="/dine-in" element={<DineInScreen/>}/>
                    <Route path="/take-away" element={<TakeAwayScreen/>}/>
                    <Route path="/delivery" element={<DeliveryScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegistrationScreen/>}/>
                    <Route path="/pin-code" element={<PinCodeScreen/>}/>
                    <Route path="/reset-password" element={<ResetPasswordScreen/>}/>
                    <Route path="/verification" element={<VerificationScreen/>}/>
                </Routes>
                {/*    End Revenue Section*/}
            </main>
            <NewOrderAlertComponent isShowNewOrderAlert={showNewOrderAlert} hideNewOrderAlert={handleNewOrderAlert}/>
            {/*End HomeScreen Section*/}
        </div>
    );
}

export default App;
