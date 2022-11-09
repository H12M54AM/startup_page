import Header from "../../components/nav/Header"
import Footer from "../../components/foot/Footer"
import Projects from "./Projects";


export default function Home() {
  return (
    <>
      <Header />

      {/* Pages */}
      <section className="p-8 py-40 bg-orange-100">
        <h1 className="font-extrabold text-9xl">Company Name</h1>
        <h3 className="py-5 text-3xl font-extralight">Company Slogan</h3>
      </section>

      <section className="p-40 bg-orange-400">
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
      <Footer />
    </>
  )
}
