import React from 'react';

function VerificationScreen(props) {
    return (
        <section
            className="flex flex-col items-center justify-center w-full h-[calc(100vh-60px)] max-w-screen bg-white">
            <div
                className={"flex flex-col items-start justify-center w-full h-100 max-w-screen p-6 ps-40 bg-white gap-3"}>
                <h1 className={"text-8xl font-bold"}>Verification</h1>
                <h3 className={"text-1xl w-1/2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus eos explicabo
                    necessitatibus omnis quae quas quisquam .</h3>
            </div>
            <div className={"flex flex-col items-end justify-start w-full h-full max-w-screen p-6 pe-40 bg-white"}>
                <form action="" className="flex flex-col w-75 items-center justify-center gap-2">
                    <div className={"flex flex-row items-start justify-center gap-3"}>
                        <input className={"w-1/4 h-11 border-0 px-4 bg-gray-200 align-middle text-center"} type="phone"
                               name="number"/>
                        <input className={"w-1/4 h-11 border-0 px-4 bg-gray-200"} type="phone" name="number"/>
                        <input className={"w-1/4 h-11 border-0 px-4 bg-gray-200"} type="phone" name="number"/>
                        <input className={"w-1/4 h-11 border-0 px-4 bg-gray-200"} type="phone" name="number"/>
                    </div>
                    <button
                        className={"w-75 h-11 bg-amber-500 font-bold flex flex-row items-center justify-start px-5"}>Next
                    </button>
                </form>
                <span className={"w-75 flex flex-row items-center justify-end gap-3 mt-4"}>
                         <a href="sdddsd" className={"text-sm"}>Send the code again</a>
                        </span>
            </div>

        </section>
    );
}

export default VerificationScreen;