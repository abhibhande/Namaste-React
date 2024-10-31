import { CARD_URL } from "../utils/constants";

const Card = ({resData}) =>{
    // const {resData} = props;
    return (
        <div className="card">
            <img className="card-img" src={CARD_URL + resData.info.cloudinaryImageId}/>
            <div className="hotel-name">
            {resData.info.name}
            </div>
            <h5>
                {resData.info.cuisines.join(', ')}
                
            </h5>
            <h4>
                {resData.info.costForTwo}
            </h4>
        </div>
        
    );
};

export default Card;