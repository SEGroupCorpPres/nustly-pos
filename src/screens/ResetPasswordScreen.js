import React from 'react';

function ResetPasswordScreen(props) {
    return (
        <section className="flex flex-col items-center justify-center w-full h-[calc(100vh-60px)] max-w-screen bg-white">
            <div
                className={"flex flex-col items-start justify-center w-full h-100 max-w-screen p-6 ps-40 bg-white gap-3"}>
                <h1 className={"text-8xl font-bold"}>Reset Password</h1>
                <h3 className={"text-1xl w-1/2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus eos explicabo
                    necessitatibus omnis quae quas quisquam .</h3>
            </div>
            <div className={"flex flex-col items-end justify-start w-full h-full max-w-screen p-6 pe-40 bg-white"}>
                <form action="" className="flex flex-col items-center justify-center gap-2">
                    <input className={"w-100 h-11 border-0 px-4 bg-gray-200"} type="phone" name="number"
                           placeholder="Phone number"/>
                    <button className={"w-100 h-11 bg-amber-500 font-bold flex flex-row items-center justify-start px-5"}>Reset Password
                    </button>
                </form>
            </div>

        </section>
    );
}

export default ResetPasswordScreen;