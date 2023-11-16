import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hoks/Axios/useAxiosSecure";



const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // ,{
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('access token')}`
    //     }
    // }

    const handelMakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        // axios.patch(`http://localhost:5000/users/admin${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }


    const handelDelateUser= user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            axiosSecure.delete(`/users/${user._id}`)
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
             <div className=" flex justify-evenly my-4">
            <div className="h2 3xl">All Users</div>
            <div className="h2 3xl">Total All Users: {users.length}</div>
            </div>
            <div>
            <div className="overflow-x-auto">
             <table className="table table-zebra w-full">
            {/* head */}
            <thead>
            <tr>
             <th></th>
             <th>Name</th>
             <th>Email</th>
             <th>Roll</th>
             <th>Action</th>
             </tr>
             </thead>
            <tbody>
           {
            users.map((user, index)=><tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            { user.role === 'admin' ? 'Admin' : <button 
              onClick={()=>handelMakeAdmin(user)}
              className="btn  btn-lg">
            <FaUsers className='text-orange-600 text-2xl'></FaUsers>

              </button>}
            </td>
            <td>
            <button 
              onClick={()=>handelDelateUser(user)}
              className="btn btn-ghost btn-lg">
            <FaTrashAlt className='text-red-600'></FaTrashAlt>

              </button>
            </td>
          </tr>
              )
             }
      
      
         </tbody>
             </table>
         </div>
         </div>
         </div>
        
    );
};

export default AllUser;