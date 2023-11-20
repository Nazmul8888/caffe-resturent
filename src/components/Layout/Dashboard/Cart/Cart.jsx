import React from 'react';
import UseCart from '../../../Hoks/UseCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hoks/Axios/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total,item)=> total + item.price, 0)
    const axiosSecure = UseAxiosSecure();

    const handelDelate = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
               if(res.data.deleteCount > 0){
                refetch();
                if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }

               }
            })

          });

    }
    return (
        <div>
         <div className=' flex justify-evenly'>
            <h2 className="text 4xl">Items:{cart.length}</h2>
            <h2 className="text 4xl"> Total Price: $ {totalPrice}</h2>
            { cart.length ? <Link to="/dashboard/payment">
            <button className='btn btn-primary'>Pay Now</button>
            </Link>
            :
            <button className='btn btn-primary'>Pay Now</button>}
          </div>
          <div className="overflow-x-auto mb-8">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
      
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((item, index) =><tr>
            <th>
              {index}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td> $ {item.price}</td>
            <th>
              <button 
              onClick={()=>handelDelate(item._id)}
              className="btn btn-ghost btn-lg">
            <FaTrash className='text-red-600'></FaTrash>

              </button>
            </th>
          </tr>
          )
    }
      
      
    </tbody>
  </table>
</div>

        </div>
        
        
    );
};

export default Cart;