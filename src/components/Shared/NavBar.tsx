import { Link } from "react-router-dom";


const NavBar = () => {
  
  
  
    return (
       <div className="navbar bg-white shadow-sm">
  <div className="flex-1">
    <a className=" hover:text-red-500 text-black text-2xl font-extrabold"> Task Management System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-black text-xl font-bold">
      <Link className="hover:text-red-500"  to="/Tasks">  <li> <a>  Tasks </a></li>  </Link>
     <Link  className="hover:text-red-500"  to="/Counters">  <li> <a> Counters  </a></li>  </Link>

     {/* <div>
        <ModeToggle></ModeToggle>
     </div> */}
    
    </ul>
  </div>
</div>
    );
};

export default NavBar;