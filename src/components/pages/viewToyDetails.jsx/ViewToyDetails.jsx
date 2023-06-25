import React from "react";

const ViewToyDetails = () => {
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
      <Helmet>
        <title>Toy Mart | View toy details</title>
      </Helmet>
      <div className="col-span-6">
        <img
          src={toyUrl}
          alt=""
          className="object-cover w-full h-80 rounded-md shadow-lg"
        />
      </div>
      <div className="col-span-6">
        {toyName && <p className="font-bold text-2xl">Toy Name: {toyName}</p>}
        {sellerName && <p> Seller: {sellerName}</p>}
        {email && <p>Email: {email}</p>}
        {subCategory && <p>Sub Category: {subCategory}</p>}
        {price && <p>Price: {price}</p>}
        {rating && <p>{rating}</p>}
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

export default ViewToyDetails;
