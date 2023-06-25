import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
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
  } = toy;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-20">
              <img src={toyUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td className="capitalize">{sellerName}</td>
      <td>{email} </td>
      <td>
        <div className="flex">
          {subCategory && <span> {subCategory === "1" ? "Math Toy" : ""}</span>}
          {subCategory && <p> {subCategory === "2" ? "Language Toy" : ""}</p>}
          {subCategory && <p> {subCategory === "3" ? "Science Toy" : ""}</p>}
        </div>{" "}
      </td>
      <td>$ {price}</td>
      <td> {quantity}</td>
      <td> {rating}</td>

      <td>
        <Link to={`/toy/${_id}`}>
          <button className="bg-indigo-500 text-white py-2 rounded-md w-full px-4">
            {" "}
            View details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyCard;
