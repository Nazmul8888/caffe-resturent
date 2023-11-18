import { FaEdit, FaTrashAlt,  } from "react-icons/fa";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../Hoks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hoks/Axios/useAxiosSecure";

const ManageItems = () => {
  const [menu,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handelDelate = item=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`);
            // console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
       
        }
      });

  }
 
  return (
    <div>
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="---Hurry Up!---"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-red-600">$ {item.price}</td>
                  <td>
                  <button 
                     
                     className="btn  btn-sm bg-orange-500">
                        <FaEdit className='text-white text-2xl'></FaEdit>
                  

              </button>
                  </td>
                  <td>
                  <button 
             onClick={()=>handelDelate(item._id)}
              className="btn bg-red-600 btn-sm">
            <FaTrashAlt className='text-white'></FaTrashAlt>

              </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
