import React from "react";

import Header from "../../components/nav/Header"
import Footer from "../../components/foot/Footer"
import Projects from "./Projects";

// All of the code for the Home page will be on here

export default function App() {
    return (
      <>
        <Header/>

        {/* Tailwind tests */}
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <div className="text-3xl">Hello</div>
        </div>

        {/* Pages */}
        <h1>Landing</h1>
        <h1>About</h1>
        <Projects title={"Title"} img={"Image"} description={"Description"} date={"The date"}  />
        <h1>Community</h1>
        <Footer/>
      </>
    )
  }