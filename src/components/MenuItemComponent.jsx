import React, {useState} from "react";
import {cartList} from "../assets/MockData";
import { doc, setDoc } from "firebase/firestore";
import {firebaseCloudFirestoreDB} from "../firebase_config";

function MenuItemComponent({item}) {
    const [itemQty, setItemQty] = useState(1);
    let isExist = cartList.find(cartItem => cartItem.menuId === item.id);

    // increment / decrement item qty
    function toggleIncreaseQty() {
        console.log("increase qty")
        setItemQty(itemQty + 1)
    }

    function toggleDecreaseQty() {
        if (itemQty === 1) {
            console.log("decrease qty cannot because item qty is 1")
            setItemQty(1);
        } else {
            console.log("decrease qty")
            setItemQty(itemQty - 1)
        }
    }

    // add item to cart list where current item id !== currentList item id
    async  function addToCart () {
        console.log("addToCart")
        console.log("isExist", isExist)
        console.log(cartList)
        // if (!isExist) {
        //     console.log(item)
        //     cartList.push(item);
        // }

       try {
           await setDoc(doc(firebaseCloudFirestoreDB, "nustly-cart", String(item.id)), {
               name: item.title,
               price: item.price,
               qty: itemQty
           })
           console.log("Document successfully written!")
       }
       catch (error) {
           console.error("Error adding document: ", error);
       }
    }

    return <div className={"flex flex-col text-black"}>
        <div className={"w-full h-44 bg-red-300"}>
        </div>
        <div className={"flex flex-col gap-2 px-4 py-2 bg-white"}>
            <h2 className={"text-black font-bold text-2xl"}>{item.title}</h2>
            <div className={"flex flex-row gap-4 justify-between"}>
                <div className={"flex flex-col gap-1"}>
                    <p>Price</p>
                    <p className={"text-2xl box-border font-bold text-amber-300"}>$ {item.price}</p>
                </div>
                <div className={"flex flex-row  items-center justify-end text-black font-bold text-2xl"}>
                    <button
                        onClick={() => toggleDecreaseQty()}
                        className={"font-medium text-black h-full w-13 bg-amber-400"}>-
                    </button>
                    <p className={"w-13 flex justify-center items-center"}>
                        {itemQty}
                    </p>
                    <button
                        onClick={() => toggleIncreaseQty()}
                        className={"font-medium text-black h-full w-13 bg-amber-400"}>+
                    </button>
                </div>
            </div>
            <button
                onClick={ addToCart}
                className={"font-medium text-black w-full h-13 bg-amber-400  text-xl"}>Add to Cart
            </button>
        </div>
    </div>;
}

export default MenuItemComponent;