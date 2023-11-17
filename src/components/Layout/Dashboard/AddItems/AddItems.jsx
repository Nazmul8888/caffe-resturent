import { useForm } from "react-hook-form";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hoks/Axios/useAxiosPublic";
import useAxiosSecure from "../../../Hoks/Axios/UseAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key= '5f2392a5712f1aa41c22a6e58d128ac1'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) =>{
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch( image_hosting_api,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json()).then((res)=>{
            const imgUrl=res.data.display_url
            console.log(imgUrl)
        });
        if(res.data.success){
            const menuItem ={
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                image: res.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu',menuItem);
            console.log(menuRes);
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added data`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url', res.data);

    };
    return (
        <div>
            <SectionTitle heading='add an item' subHeading='whats New'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="recipe name"
                            {...register('name',{required: true})}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category  */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue='default' {...register('category',{required: true})}
                                className="select select-bordered w-full ">
                                <option disabled value='default' selected>Select a category </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price',{required: true})}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>
                    <div className="form-control w-full my-6">
                    <input {...register('image',{required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Item  <FaUtensils className="ml-6"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;