import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Heading = () =>{

    const [LoginBtn,setLoginBtn] = useState("Login");

    return(
    <div className="heading">
       <div className="logo">
         <img src={LOGO_URL}/>
       </div>
       <div className="heading-menu">
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About us </Link></li>
            <li> <Link to="/contact"> Contact us </Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              LoginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
            }}>
              {LoginBtn}
              </button>
        </ul>
       </div>
    </div>
)
};

export default Heading;