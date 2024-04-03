import Awards from "./components/ui/Awards"
import Contact from "./components/ui/Contact"
import Navbar from "./components/ui/Navbar"
import Partners from "./components/ui/Partners"
import Presentation from "./components/ui/Presentation"

function App() {

  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Presentation/>
      <Partners />
      <Awards />
      <Contact />
    </div>
  )
}

export default App
