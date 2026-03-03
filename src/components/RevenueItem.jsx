import TaxIcon from "./icons/TaxIcon";

function RevenueItem(props) {
    return <li className={"flex flex-col w-full items-start justify-center border-[0.5px] bg-white p-3 border-gray-200"}>
        <span className={"flex flex-row justify-start items-center text-justify w-full gap-5"}>
            <div className={"p-2 text-center bg-yellow-300"}>
                <TaxIcon/>
            </div>
            <h3 className={"font-bold text-xl"}>Revenue</h3>
        </span>
        <div className="flex flex-row justify-between w-full items-end">
            <div className={"flex flex-col mt-3 text-justify"}>
                <h4 className={"font-bold"}>${props.item.subtotal}</h4>
                <h5>last month</h5>
            </div>
            <p className={"text-green-500"}>↑3.6%</p>
        </div>
    </li>;
}

export default RevenueItem;