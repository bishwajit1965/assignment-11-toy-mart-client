import { Link, useLoaderData } from "react-router-dom";

const Toy = () => {
  const toy = useLoaderData();
  const {
    toyUrl,
    toyName,
    sellerName,
    email,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;
  console.log(toy);
  return (
    <div className="grid md:grid-cols-12 gap-4 justify-normal md:my-12">
      <div className="col-span-6">
        <img
          src={toyUrl}
          alt=""
          className="object-cover w-full h-80 rounded-md shadow-lg"
        />
      </div>
      <div className="col-span-6">
        {toyName && <p className="font-bold text-2xl">Toy Name: {toyName}</p>}
        {sellerName && <p className="capitalize"> Seller: {sellerName}</p>}
        {email && <p>Email: {email}</p>}
        {subCategory && <p>Sub Category: {subCategory}</p>}
        <div className="flex items-center justify-between">
          {price && <p>Price: {price}</p>}
          {rating && <p>Rating: {rating}</p>}
        </div>
        {quantity && <p>Quantity: {quantity}</p>}
        {description && <p>Description: {description}</p>}
        <Link to="/">
          <button className="btn-md bg-indigo-500 text-white my-5 w-full rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Toy;
