import React from "react";

// Will stay the same for the entire project

export default function Header() {
    return (
        <header>
            <div className="flex flex-row list-none">
                <li><ul><a href="#">Home</a></ul></li>
                <li><ul><a href="#">About</a></ul></li>
                <li><ul><a href="#">Pricing</a></ul></li>
                <li><ul><a href="#"><button>BOOK ME</button></a></ul></li>
            </div>
        </header>
    );
}