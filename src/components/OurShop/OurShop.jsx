import { useState } from 'react';
import shopImg from '../../assets/shop/banner2.jpg'
import Cover from '../Pages/SharedPage/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hoks/useMenu';
import OrderTab from './Order/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup','dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setIndex] = useState(initialIndex);
    const [menu] = useMenu();
   
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
              <Helmet>
            <title>cafe Rio | Our Shop</title>
            </Helmet>
            <Cover img={shopImg} title='our shop'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>


         </div>
            );
};

            export default OurShop;