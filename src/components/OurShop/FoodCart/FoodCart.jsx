import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Provider/Hoks/useAuth";
import Swal from 'sweetalert2'

import UseCart from "../../Hoks/UseCart";
import useAxiosSecure from "../../Hoks/Axios/useAxiosSecure";



const FoodCart = ({item}) => {
    const {name,recipe,image,price, _id}= item;

    const {user} = UseAuth();
    const navigate = useNavigate();
 const location = useLocation();
 const axiosSecure = useAxiosSecure();
 const [, refetch] = UseCart();
    
    const handelAddToCart = ()=>{
        // send to database
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                        
                      });
                      refetch();
                     
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged in ",
                text: "please login add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}})
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 text-white rounded-lg bg-red-600 hover:bg-pink-600 mt-4 mr-4 px-4">$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={handelAddToCart} className=" btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;