import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { Helmet } from "react-helmet";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyUrl = form.url.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    console.log(
      toyUrl,
      toyName,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description
    );
    const toyInputData = {
      toyUrl,
      toyName,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    fetch("https://toy-mart-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInputData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          MySwal.fire({
            position: "top-end",
            icon: "success",
            title: "Toy data added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="md:my-12 my-4">
      <Helmet>
        <title>Toy Mart | Add Toy</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center md:mb-10">Add Toy</h1>
      <form onSubmit={handleAddToy}>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <input
              type="url"
              name="url"
              placeholder="Picture url..."
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="text"
              name="toyName"
              placeholder="Toy name..."
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller name..."
              className="input input-bordered capitalize"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email address..."
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <select name="subCategory" id="" className="input input-bordered">
              <option>Select</option>
              <option value="1">Math toys</option>
              <option value="2">Language toys</option>
              <option value="3">Science toys</option>
            </select>
          </div>
          <div className="form-control col-span-6">
            <input
              type="text"
              name="price"
              placeholder="Toy price..."
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <input
              type="text"
              name="rating"
              placeholder="Toy rating..."
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="text"
              name="quantity"
              placeholder="Toy available quantity..."
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-12">
            <textarea
              name="description"
              id=""
              className="input input-bordered h-20"
              placeholder="Detail description..."
            ></textarea>
          </div>
        </div>
        <div className="w-full p-2 mb-4">
          <button
            type="submit"
            className="bg-indigo-500 w-full text-white py-4 rounded-md"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
