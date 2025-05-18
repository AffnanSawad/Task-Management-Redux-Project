import { Outlet } from "react-router-dom"
import NavBar from "./components/Shared/NavBar"
import Footter from "./components/Shared/Footter"


function App() {
  

  return (
    <>
     <div className="  min-h-screen">
    
    <NavBar></NavBar>

    <Outlet></Outlet>

    <Footter></Footter>

 
    

     </div>
  
    </>
  )
}

export default App
