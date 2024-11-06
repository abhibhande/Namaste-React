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
        <div className="card w-64 h-[400px] m-2 p-2 border-2 rounded-md bg-gray-200 hover:bg-gray-400">
            <img className="w-full h-[200px] bg-cover rounded-t-md" src={CARD_URL + resData.info.cloudinaryImageId}/>
            <div className="font-bold text-[18px]">
            {name}
            </div>
            <h5 className="text-[16px]">
                {cuisines.join(', ')}
                
            </h5>
            <h4 className="font-bold text-[15px]">
                {costForTwo}
            </h4>
            <h4 className="font-bold text-[15px]">
                {avgRating}
            </h4>
        </div>
        
    );
};

export default Card;