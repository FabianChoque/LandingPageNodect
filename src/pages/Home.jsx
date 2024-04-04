//Components
import Awards from "../components/ui/Awards"
import Contact from "../components/ui/Contact"
import Partners from "../components/ui/Partners"
import Presentation from "../components/ui/Presentation"

function Home() {

  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Presentation/>
      <Partners />
      <Awards />
      <Contact />
    </div>
  )
}

export default Home
