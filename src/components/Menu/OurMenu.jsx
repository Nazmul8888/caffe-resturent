import { Helmet } from 'react-helmet-async';
import Cover from '../Pages/SharedPage/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import useMenu from '../Hoks/UseMenu';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import MenuCategory from '../../component/SectionTitle/Menu/MenuCategory';

const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle subHeading='Dont miss' heading='Todays Offered'></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory
            items={dessert}
            title='Dessert'
            img={desertImg}
            ></MenuCategory>
            <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default OurMenu;