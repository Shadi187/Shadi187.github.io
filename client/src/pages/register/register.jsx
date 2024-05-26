import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import './register.css'a

const Register = ()=>{
    const [info,setInfo] = useState({
        username:undefined,
	    email:undefined,
	    password:undefined,
	    city:"undefined",
	    country:"undefined",
	    phone:"undefined"
    })
    
    
    const { loading, error, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

      const handleClick = async (e)=>{
        e.preventDefault();
        try{ 
            const res = await axios.post("/auth/register", info);
            navigate("/login")
        }catch(err)
        {
            console.log(err)
         }
      }

      return( 
      


<body>
    <div class="container">
        <div class="header">
            <h1 class="headerText">The Hotelier</h1>
        </div>
        <div class="register-box">
            <h2>Create an account</h2>
            
                <div class="input-group">
                    <label for="first-name" >Username</label>
                    <input onChange={handleChange} type="text" id="username" name="first-name" required/>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input onChange={handleChange} type="email" id="email" name="email" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input onChange={handleChange} type="password" id="password" name="password" required/>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input  type="password"  name="confirm-password" required/>
                </div>

                
                
                {/* <p class="login-link">Already have an account? <a href="login">Log in</a></p> */}
            
            <button type="submit" onClick={handleClick}>Register</button>
        </div>
    </div>
</body>


      )
}

export default Register;