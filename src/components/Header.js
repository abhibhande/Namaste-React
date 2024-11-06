import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () =>{

    const [LoginBtn,setLoginBtn] = useState("Login");

    return(
    <div className="flex justify-between m-3 p-[10] border bg-slate-800/80 rounded-md text-white font-normal">
       <div className="w-12">
         <img className="rounded-md" src={LOGO_URL}/>
       </div>
       <div className="flex items-center">
        <ul className="flex justify-center">
            <li className="px-[10]">Online Status : {  useOnlineStatus() === true ? '✅' : '🔴'}</li>
            <li className="px-[10] rounded-md hover:bg-gray-700 "><Link to="/"> Home </Link></li>
            <li className="px-[10] rounded-md hover:bg-gray-700"><Link to="/about"> About us </Link></li>
            <li className="px-[10] rounded-md hover:bg-gray-700"> <Link to="/contact"> Contact us </Link></li>
            {/* <li className="px-[10] rounded-md hover:bg-gray-700">Cart</li> */}
            <button className="px-[14] ml-2 rounded-md bg-green-400 hover:bg-green-500" onClick={()=>{
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