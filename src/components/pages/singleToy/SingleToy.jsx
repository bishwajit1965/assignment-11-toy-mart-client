import React from "react";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id, toyUrl, toyName, price, rating } = toy;
  return (
    <div className="col-span-3 relative border-t-rounded-md">
      <img src={toyUrl} alt="" className="rounded-t-md shadow-lg w-full h-60" />
      <div className="p-2 border border-slate-100">
        {toyName && <p className="font-bold">{toyName}</p>}
        <div className="flex items-center justify-between mb-10">
          {price && <p>Price: ${price}</p>}
          {rating && <p>Rating: {rating}</p>}
        </div>
        <Link to={`/toy/${_id}`}>
          <button className="absolute bottom-0 left-0 bg-indigo-500 px-4 py-1 text-white w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleToy;
