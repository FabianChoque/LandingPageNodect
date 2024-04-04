import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"
import Contact from "./components/ui/Contact"
import Faqs from "./components/ui/Faqs"
import Home from "./pages/Home";
import Bases from "./components/ui/Bases";

function App() {
  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/contacto" element={ <Contact />}/>
        <Route path="/faqs" element={ <Faqs />}/>
        <Route path="/bases" element={ <Bases /> } />
        <Route path="/*" element={ <Navigate to='/'/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
