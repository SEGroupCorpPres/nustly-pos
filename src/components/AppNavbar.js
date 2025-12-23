import SearchIcon from "./icons/SearchIcon";
import NotifyIcon from "./icons/NotifyIcon";
import Navs from "./Navs";


function AppNavbar({isHome = true, handleNewOrderAlert}) {
    return (
        <nav className="fixed w-full h-15 bg-white shadow p-4 flex flex-row justify-between items-center box-border">
                <h3 className="text-3xl font-bold text-black">
                n<span className="text-amber-500">u</span>
            </h3>

            {/* if screen is home return nav-items else return null*/}
            {
                isHome ? (<Navs handleNewOrderAlert={handleNewOrderAlert} />) : null
            }
        </nav>
    );
}

export default AppNavbar;