import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";


const NavBar = () => {
  
  
  
    return (
       <div className="navbar bg-white shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-black text-2xl font-extrabold"> Task Management System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-black text-xl font-bold">
      <Link to="/Tasks">  <li> <a>  Tasks </a></li>  </Link>
     <Link to="/Counters">  <li> <a> Counters  </a></li>  </Link>

     <div>
        <ModeToggle></ModeToggle>
     </div>
    
    </ul>
  </div>
</div>
    );
};

export default NavBar;