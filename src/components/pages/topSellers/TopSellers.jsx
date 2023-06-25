import React from "react";

const TopSellers = ({ topSeller }) => {
  const {
    sellerImageUrl,
    toyName,
    sellerName,
    price,
    rating,
    quantity,
    description,
  } = topSeller;
  return (
    <div className="col-span-3 relative">
      <img
        src={sellerImageUrl}
        alt="top-seller-image"
        className="object-cover w-full rounded-md shadow-sm h-60"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
      <div className="absolute inset-0 grid items-center justify-center text-white p-4 opacity-25">
        {toyName && <h2 className=" font-bold  text=3xl">Toy: {toyName}</h2>}
        {sellerName && <h3 className="font-bold">Seller: {sellerName}</h3>}
        {price && <p>Price: ${price}</p>}
        {quantity && <p>Sold: {quantity}</p>}
        {rating && <p>Rating: {rating}</p>}
      </div>
    </div>
  );
};

export default TopSellers;
