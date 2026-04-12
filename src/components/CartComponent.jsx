import React, {useEffect, useState} from 'react';
import {cartList} from "../assets/MockData";
import DeleteIcon from "./icons/DeleteIcon";
import {collection, doc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import {firebaseCloudFirestoreDB} from "../firebase_config";

function CartListComponent(props) {
    const [items, setItems] = useState([]);
    function removeItemFromCart(item) {
        console.log(item);
        let indexRemovableItem = cartList.findIndex(cartItem => cartItem.id === item.id);
        if (indexRemovableItem) {
            cartList.splice(indexRemovableItem, 1);
        }
        console.log(cartList);
    }

    useEffect(() => {
        async function fetchDocs() {
            try {
                const querySnapshot = await getDocs(
                    collection(firebaseCloudFirestoreDB, "nustly-cart")
                );

                const docs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setItems(docs);
                console.log("firestore docs " + docs[0].name);
            } catch (error) {
                console.error("Error getting documents:", error);
            }
        }

        fetchDocs().then((r) => {
            console.log(r);
        },error => console.log(error));
    }, []);

    async function updateOneField(docId, newValue) {
        const docRef = doc(firebaseCloudFirestoreDB, "nustly-cart", docId);

        await updateDoc(docRef, {
            qty: newValue,
        });
    }

    async function deleteItem({itemId}) {
        try {

        await deleteDoc(doc(firebaseCloudFirestoreDB, "nustly-cart", itemId));
        console.log("Document successfully deleted!");
        } catch (error) {
        console.error("Error removing document: ", error);
        }
    }

    return <ul className={"flex flex-col gap-3 w-full h-3/6 overflow-y-auto"}>
        {
            items.map((product) => (
                <li className={"flex flex-col w-full justify-start items-start px-5 pe-5 pb-5"}>
                    <div
                        className={"flex flex-row justify-between items-end w-full text-black text-2xl"}>
                        <p>{product.name}</p>
                        <p className={"text-amber-500"}>${product.price}</p>
                    </div>
                    <hr className={"my-2 w-full text-gray-400"}/>
                    <div className={"flex flex-row gap-4 justify-between h-12 items-end w-full"}>
                        <div
                            className={"flex flex-row  items-center justify-end text-black font-bold text-2xl h-10 gap-2"}>
                            <button
                                className={"font-medium text-black h-full w-12 bg-amber-400"}>-
                            </button>
                            <p className={"w-12 h-full flex justify-center items-center bg-gray-300"}>
                                1
                            </p>
                            <button
                                className={"font-medium text-black h-full w-12 bg-amber-400"}>+
                            </button>
                        </div>
                        <div onClick={() => deleteItem({ itemId: product.id})}
                             className={"flex flex-col gap-1 border border-gray-400 rounded-full p-2"}>
                            <DeleteIcon/>
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>;
}

function CartComponent({isShowCartComponent, onHandleHideCartComponent}) {
    function showCartComponent() {
        console.log(`showCartComponent ${isShowCartComponent} on cartComponent`);
        return isShowCartComponent ? "flex flex-row" : "hidden"
    }

    function handleHideCartComponent() {
        console.log("hide component")
        onHandleHideCartComponent();
    }

    function totalPrice() {
        return cartList.reduce((acc, item) => acc + item.price, 0);
    }


    return (
        <div
            className={`${showCartComponent()} w-full h-screen absolute z-30 bg-gray-900/50  top-0 left-0  justify-end items-center `}>
            <div className={"w-full h-full "} onClick={() => handleHideCartComponent()}></div>
            <aside className={"w-2/7 h-full bg-white flex flex-col gap-3 right-0"}>
                <div className={"w-full p-5"}>
                    <h1 className={"text-black font-bold text-4xl mt-4"}>Checkout</h1>
                    <p className={"text-black"}>Please confirm the order below to completed payment</p>
                    <hr className={"my-4 text-gray-400"}/>
                </div>
                <CartListComponent />
                <hr className={"my-4 text-black w-full"}/>
                <div className={"flex flex-col justify-between items-start w-full gap-3 px-5"}>
                    <p className={"text-black text-xl"}>Total Items</p>
                    <div className={"flex flex-row justify-between w-full"}>
                        <p>{cartList.length}</p>
                        <p className={"text-amber-500 text-xl"}>${totalPrice()}</p>
                    </div>
                    <div className={"flex flex-row justify-between w-full gap-5 h-15"}>
                        <button
                            className={"flex-1 bg-transparent flex flex-row items-center justify-center border border-gray-400"}
                            onClick={() => handleHideCartComponent()}>Print invoice
                        </button>
                        <button
                            className={"flex-1 font-medium text-black bg-amber-500"}
                            onClick={() => handleHideCartComponent()}
                        >Confirm
                        </button>
                    </div>

                </div>
            </aside>
        </div>
    );
}

export default CartComponent;