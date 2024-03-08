import LandingPage from "../pages/Landing/LandingPage"
import Landing2 from "../pages/Landing2/Landing2"
import TermPage from "../pages/TermPage/TermPage"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"
import { Route, Routes, BrowserRouter } from "react-router-dom"

const Routs = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/landing2" element={<Landing2/>}/>
                <Route path="/term" element={<TermPage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes> 
        </BrowserRouter>
    </div>
  )
}

export default Routs