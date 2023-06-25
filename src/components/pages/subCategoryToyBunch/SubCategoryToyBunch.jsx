import React from "react";
import { Link } from "react-router-dom";

const SubCategoryToyBunch = ({ subToy }) => {
  const {
    _id,
    toyUrl,
    toyName,
    sellerName,
    email,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = subToy;
  return (
    <div className="col-span-3 relative">
      <img
        src={toyUrl}
        alt=""
        className="object-cover rounded-t-md shadow-sm w-full h-56"
      />
      <div className="p-2 border border-slate-100">
        {toyName && <h2 className="font-bold">{toyName}</h2>}
        <div className="flex items-center justify-between pb-5">
          {price && <p>Price: ${price}</p>}
          {rating && <p>Rating: {rating}</p>}
        </div>
        <Link to={`/toy/${_id}`}>
          <button
            className="absolute bott
        left-0 bg-indigo-500 w-full py-1 text-white"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubCategoryToyBunch;
