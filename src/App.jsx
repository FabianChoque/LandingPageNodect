import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Contact from "./components/ui/Contact"
import HomePage from "./components/HomePage"
import Faqs from "./components/ui/Faqs"

function App() {

  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/contacto" element={ <Contact />}/>
        <Route path="/faqs" element={ <Faqs />}/>

        <Route path="/*" element={ <Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
