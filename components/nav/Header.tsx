import React from "react";

// Will stay the same for the entire project

export default function Header() {
    return (
        <header>
            <div className="static flex flex-row justify-between w-full text-center align-middle bg-orange-200">
                <div className="p-4 m-2 ">
                    <ul><li><a href="">Home</a></li></ul>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row p-4 m-2 justify-evenly">
                        <ul className="px-2 "><li><a href="">About</a></li></ul>
                        <ul className="px-2 "><li><a href="">Project</a></li></ul>
                    </div>
                </div>
                <div>
                    {/* Set the margin left to a smaller value to fit the middle links */}
                    <button className="p-3 m-3 transition-all bg-orange-300 bg-button-100 hover:shadow-lg rounded-2xl w-52 h-15 hover:bg-orange-400"><ul><li><a href="">BOOKME</a></li></ul></button>
                </div>
            </div>
        </header>
    );
}
{/* <li><ul><a href="#">Home</a></ul></li>
<li><ul><a href="#">About</a></ul></li>
<li><ul><a href="#">Pricing</a></ul></li>
<li><ul><a href="#"><button>BOOK ME</button></a></ul></li> */}