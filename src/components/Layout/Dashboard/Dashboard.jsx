import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hoks/UseCart";


const Dashboard = () => {
    const [cart] = UseCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-purple-500">
                <ul className="menu p-4">
                    <li >
                        <NavLink to='/dashboard/userHome'> 
                        <FaHome></FaHome>
                        User Home</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/reservation'> 
                       <FaCalendar></FaCalendar>
                        Reservation</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/cart'> 
                        <FaShoppingCart></FaShoppingCart>
                        My cart {cart.length}</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/review'> 
                        <FaAd></FaAd>
                        Review</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/booking'> 
                        <FaList></FaList>
                        My Booking</NavLink>
                        </li>

                        <div className="divider"></div>
                        <li >
                        <NavLink to='/'> 
                        <FaAd></FaAd>
                        Home</NavLink>
                        </li>
                        <li >
                        <NavLink to='/ourShop/salad'> 
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                        </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;