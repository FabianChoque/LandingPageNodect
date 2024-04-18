import { Navigate, Route, Routes } from "react-router-dom"
//Footer and header
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"

//Pages
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./components/ui/Contact"
import Faqs from "./components/ui/Faqs"
import Bases from "./components/ui/Bases";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/PrivacyPolicy";
function App() {
  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/company" element={ <Company/>}/>
        <Route path="/contacto" element={ <Contact />}/>
        <Route path="/faqs" element={ <Faqs />}/>
        <Route path="/bases" element={ <Bases /> } />
        <Route path="/cookies" element={ <Cookies /> } />
        <Route path="/privacy" element={ <Privacy /> } />
        <Route path="/*" element={ <Navigate to='/'/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
