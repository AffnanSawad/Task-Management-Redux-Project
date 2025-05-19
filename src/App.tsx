import { Outlet } from "react-router-dom"
import NavBar from "./components/Shared/NavBar"
import Footter from "./components/Shared/Footter"
import HomePage from "./components/Pages/HomePage"


function App() {
  

  return (
    <>
     <div className="  min-h-screen">
    
    <NavBar></NavBar>
     
     <HomePage></HomePage>
   
    <Outlet></Outlet>

    <Footter></Footter>

 
    

     </div>
  
    </>
  )
}

export default App
