import { LOGO_URL } from "../utils/constants";

const Heading = () =>{
    return(
    <div className="heading">
       <div className="logo">
         <img src={LOGO_URL}/>
       </div>
       <div className="heading-menu">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
       </div>
    </div>
)
};

export default Heading;