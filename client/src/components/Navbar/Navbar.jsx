import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assests/images/logo.png'; // Update the path to your logo image

const Navbar = () => {
  return (
    <>
      <nav>
      <NavLink exact to="/" activeClassName="active-link">
         <img src={logo} alt="Logo" width="150" height="90" />
      </NavLink>
        
        <div>
          <ul id="navbar">
            <li>
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </li>
      
            <li>
              <NavLink to="/login" activeClassName="active-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
};

export default Navbar;