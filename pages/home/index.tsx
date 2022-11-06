import Header from "../../components/nav/Header"
import Footer from "../../components/foot/Footer"
import Projects from "./Projects";


export default function Home() {
  return (
    <>
      <Header/>

      {/* Tailwind tests */}
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <div className="text-3xl">Hello</div>
      </div>

      {/* Pages */}
      <section className="bg-black ">
        <h1>Company Name</h1>
        <h3>Company Slogan</h3>
      </section>
      
      <section>
        <h1>About</h1>
      </section>
        
      {/* Shows the company projects worked. */}
      <Projects 
        title={"Title"} 
        img={"Image"} 
        description={"Description"} 
        date={"The date"}  
      />

      <h1>Community</h1>
      <Footer/>
    </>
  )
}
