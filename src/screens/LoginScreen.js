import React from 'react';

function LoginScreen(props) {
    return (
        <section className="flex flex-row items-center justify-center w-full h-max max-w-screen bg-white">
            <div
                className={"flex flex-col items-center justify-center w-full h-100 max-w-screen p-6 bg-white gap-3"}>
                <h1 className={"text-7xl font-bold"}>Login</h1>
                <h3 className={"text-1xl w-1/2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus eos explicabo
                    necessitatibus omnis quae quas quisquam .</h3>
            </div>
            <div className={"flex flex-col items-center justify-end w-full h-[calc(100vh-60px)] max-w-screen p-6 bg-white"}>
                <form action="" className="flex flex-col items-center justify-center gap-2">
                    <input className={"w-100 h-11 border-0 px-4 bg-gray-200"} type="phone" name="number"
                           placeholder="Phone number"/>
                    <input className={"w-100 h-11 border-0 px-4 bg-gray-200"} type="password" name="password"
                           placeholder="Password"/>
                    <span className={"w-100 flex flex-row items-center justify-end"}>
                            <a href="sdd" className={"text-sm font-bold text-blue-500"}>Forgot password ?</a>
                        </span>
                    <button className={"w-100 h-11 bg-amber-500 flex flex-row items-center justify-start px-5"}>Log
                        In
                    </button>
                </form>
                <span className={"w-100 flex flex-row items-center justify-start gap-3 mt-4"}>
                            <p>Don't have an account ?</p><a href="sdddsd"
                                                             className={"text-sm font-bold text-blue-500"}>Get Started</a>
                        </span>
            </div>

        </section>
    );
}

export default LoginScreen;