import ToyRow from "../toyRow/ToyRow";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../providers/AuthProvider";

const MyToys = () => {
  // const toys = useLoaderData();
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [toysData, setToysData] = useState([]);

  const url = `https://toy-mart-server.vercel.app/toy?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);
  const handleToyDelete = (id) => {
    const proceed = confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingToys = toysData.filter((toy) => toy._id !== id);
            setToysData(remainingToys);
            alert("Data deleted successfully!");
          }
        });
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>Toy Mart | My Toys</title>
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
              <ToyRow
                key={toy._id}
                toy={toy}
                handleToyDelete={handleToyDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
