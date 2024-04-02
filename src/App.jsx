import Contact from "./components/ui/Contact"
import Navbar from "./components/ui/Navbar"
import Presentation from "./components/ui/Presentation"

function App() {

  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Presentation/>
      <Contact />
    </div>
  )
}

export default App
