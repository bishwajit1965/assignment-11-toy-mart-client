import React from "react";

const TopSellingToys = ({ topSellerToys }) => {
  const { toyUrl, toyName, sellerName, subCategory, rating } = topSellerToys;
  return (
    <div className="col-span-3">
      <img
        src={toyUrl}
        alt="top-selling-toys"
        className="object-cove rounded-md shadow-lg w-full h-48"
      />
    </div>
  );
};

export default TopSellingToys;
