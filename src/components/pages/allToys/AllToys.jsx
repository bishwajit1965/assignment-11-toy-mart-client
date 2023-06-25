import { useLoaderData } from "react-router-dom";
import ToyCard from "../toyCard/ToyCard";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Toy Mart | All Toys</title>
      </Helmet>

      <div className="overflow-x-auto w-full md:my-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Image</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Rat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
