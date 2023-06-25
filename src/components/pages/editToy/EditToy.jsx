import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const EditToy = () => {
  const toy = useLoaderData();
  console.log(toy);
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
  } = toy;

  const handleUpdateToy = (event) => {
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

    const toyUpdatableData = {
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
    MySwal.fire({
      title: "Are you sure?",
      text: "If you are sure, proceed !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-mart-server.vercel.app/toys/${_id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(toyUpdatableData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              MySwal.fire("Updated!", "Toy has been updated.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full md:my-12">
      <form onSubmit={handleUpdateToy}>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <input
              type="url"
              name="url"
              value={toyUrl}
              placeholder="Picture url..."
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="text"
              name="toyName"
              defaultValue={toyName}
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
              defaultValue={sellerName}
              placeholder="Seller name..."
              className="input input-bordered capitalize"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email address..."
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-6">
            <select
              name="subCategory"
              id=""
              defaultValue={subCategory}
              className="input input-bordered"
            >
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
              defaultValue={price}
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
              defaultValue={rating}
              placeholder="Toy rating..."
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Toy available quantity..."
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-4 w-full p-2 mb-4">
          <div className="form-control col-span-12">
            <textarea
              name="description"
              defaultValue={description}
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
            Update Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditToy;
