import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = async ()=>{
    try {
      dispatch({ type: "LOGOUT"});
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleGoToLogin = () => {
    navigate("/login")
  }
  
  const handleGoToRegister = () =>{
    navigate("/register")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">The Hotelier</span>
        </Link>
        {user ? <div className="cont"><h3>welcome {user.username}</h3> <button onClick={handleLogout} className="buttp">logout</button> </div> : (
          <div className="navItems">
            <button onClick={handleGoToRegister} className="navButton">Register</button>
            <button onClick={handleGoToLogin} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
