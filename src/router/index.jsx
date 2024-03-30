import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Products from "../pages/Products"
import Register from "../pages/Register"


const Routers = () => {
  return(
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
      {/* <Route path="/products" element={<Products/>}/> */}
    </Routes>
  )
}

export default Routers