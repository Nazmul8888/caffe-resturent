import Featured from "../SharedPage/Popular/Featured";
import PopularMenu from "../SharedPage/Popular/PopularMenu";
import Testimonial from "../SharedPage/Testimoinal/Testimonial";
import Banner from "./Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;