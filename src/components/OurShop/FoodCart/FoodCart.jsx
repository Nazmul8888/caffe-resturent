

const FoodCart = ({item}) => {
    const {name,recipe,image,category,price}= item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 text-white rounded-lg bg-slate-900 mt-4 mr-4 px-4">$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className=" btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;