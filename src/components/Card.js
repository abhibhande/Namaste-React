import { CARD_URL } from "../utils/constants";

const Card = ({resData}) =>{
    // const {resData} = props;

    //Optional Chaining
    const {
        name,
        cuisines,
        costForTwo,
        avgRating
    } = resData?.info;
    return (
        <div className="card">
            <img className="card-img" src={CARD_URL + resData.info.cloudinaryImageId}/>
            <div className="hotel-name">
            {name}
            </div>
            <h5>
                {cuisines.join(', ')}
                
            </h5>
            <h4>
                {costForTwo}
            </h4>
            <h4>
                {avgRating}
            </h4>
        </div>
        
    );
};

export default Card;