

const FoodCart = ({item}) => {
    const {name,recipe,image,category,price}= item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 text-white rounded-lg bg-slate-900 mt-4 mr-4 px-4">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;