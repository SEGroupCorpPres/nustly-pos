import {tablesObjectList} from "../assets/MockData";
import {TableStatus} from "./TableStatus";
import SelectableDinningTable from "./SelectableDinningTable";

function TableRowListComponent({tableStartName, onSelectTable}) {
    let filteredTableObjectList = tablesObjectList && tablesObjectList.length > 0 ? tablesObjectList.filter(tableObject => tableObject.number.includes(tableStartName)) : [];

    function handleSelectTable(tableId, status) {
        console.log("click table via tableRowLIstComponent")
        if (status === TableStatus.available) onSelectTable(tableId);
    }

    return <div className={`flex flex-row w-full justify-between items-center`}>
        {
            filteredTableObjectList.map((tableObject, index) => {
                return <SelectableDinningTable
                    selectTable={() => handleSelectTable(tableObject.id, tableObject.status)}
                    key={index}
                    chairsCount={tableObject.chairsCount}
                    number={tableObject.number}
                    status={tableObject.status}/>
            })
        }
    </div>
}

export default TableRowListComponent;