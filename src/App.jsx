import { Outlet } from "react-router-dom"

//Footer and header
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"

function App() {
  return (
    <div className="px-2 bg-bgbody xl:px-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
