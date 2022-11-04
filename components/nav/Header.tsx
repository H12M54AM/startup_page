import React from "react";
import next from "next";

// Will stay the same for the entire project

export default function Header() {
    return (
        <header>
            <div className="page__links">
                <li><ul><a href="#">Home</a></ul></li>
                <li><ul><a href="#">About</a></ul></li>
                <li><ul><a href="#">Pricing</a></ul></li>
                <li><ul><a href="#"><button>BOOK ME</button></a></ul></li>
            </div>
        </header>
    );
}