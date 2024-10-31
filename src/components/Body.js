import { resList } from "../utils/constants";
import Card from "./Card";

const Body = () => (
    <div class="body">
        {resList.map((restaurant) => <Card resData = {restaurant} />)}
    </div>
);

export default Body;