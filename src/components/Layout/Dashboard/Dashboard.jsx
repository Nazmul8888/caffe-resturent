import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hoks/UseCart";
import useAdmin from "../../Hoks/Axios/useAdmin";


const Dashboard = () => {
    const [cart] = UseCart();

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-purple-500">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        <li >
                        <NavLink to='/dashboard/AdminHome'> 
                        <FaHome></FaHome>
                        ADMIN HOME</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/addItems'> 
                       <FaUtensilSpoon></FaUtensilSpoon>
                        ADD ITEMS</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/manageItems'> 
                        <FaList></FaList>
                        MANAGE ITEMS </NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/manageBooking'> 
                        <FaBook></FaBook>
                        MANAGE BOOKINGS</NavLink>


                        </li>
                     <li >
                        <NavLink to='/dashboard/user'> 
                        <FaUsers></FaUsers>
                        ALL USER</NavLink>
                        </li>

                        </>
                        :
                        <>
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

                        </>
                    }


                        {/* shared nav links */}

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

                        <li >
                        <NavLink to='/ourShop/contact'> 
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
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