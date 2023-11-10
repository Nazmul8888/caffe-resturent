import { Helmet } from 'react-helmet-async';
import Cover from '../Pages/SharedPage/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.png'
import PopularMenu from '../Pages/SharedPage/Popular/PopularMenu';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
            <title>Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default OurMenu;