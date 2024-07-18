import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assests/images/logo.png'; // Update the path to your logo image

const isLoggedIn = localStorage.getItem("token") ? true : false;

const Navbar = ({ handleLogout, navigateLogin }) => {
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
            {(
              <>
                <li>
                  <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/AboutPage" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                  <NavLink to="/HowToUse" activeClassName="active-link">HowToUse</NavLink>
                </li>
                <li>
                  <NavLink to="/signup" activeClassName="active-link">signup</NavLink>
                </li>
              </>
            )}
            {
              (isLoggedIn === true) ?
                < li >
                  <button
                    className="white_btn"
                    onClick={handleLogout}
                    data-testid="Logout-button"
                  >
                    Logout
                  </button>
                </li> :
                < li >
                  <button
                    className="white_btn"
                    onClick={navigateLogin}
                    data-testid="Login-button"
                  >
                    Login
                  </button>
                </li>
            }
          </ul>
        </div>
      </nav >
    </>
  );
};

export default Navbar;

/*
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from 'client/src/assests/images/logo.png'; 

const isLoggedIn = localStorage.getItem("token") ? true : false;

const Navbar = ({ handleLogout, navigateLogin }) => {
  return (
    <>
      <nav>
        <NavLink exact to="/" activeClassName="active-link">
          <img src={logo} alt="Logo" width="109" height="43" />
        </NavLink>
        <div>
          <ul id="navbar">
            <li>
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </li>
            <>
              <li>
                <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/AboutPage" activeClassName="active-link">About</NavLink>
              </li>
              <li>
                <NavLink to="/HowToUse" activeClassName="active-link">HowToUse</NavLink>
              </li>
            </>
            {isLoggedIn ? (
              <li>
                <button
                  className="white_btn"
                  onClick={handleLogout}
                  data-testid="Logout-button"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="white_btn"
                  onClick={navigateLogin}
                  data-testid="Login-button"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
*/