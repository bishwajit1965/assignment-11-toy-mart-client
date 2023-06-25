import React from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryToyBunch from "../subCategoryToyBunch/SubCategoryToyBunch";

const SubCategoryWiseToys = () => {
  const subCategoryToys = useLoaderData();
  console.log(subCategoryToys);
  return (
    <div className="grid md:grid-cols-12 gap-6 justify-between md:my-12">
      {subCategoryToys.map((subToy) => (
        <SubCategoryToyBunch key={subToy.id} subToy={subToy} />
      ))}
    </div>
  );
};

export default SubCategoryWiseToys;
