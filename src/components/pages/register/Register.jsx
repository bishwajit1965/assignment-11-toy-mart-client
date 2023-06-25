import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../../utilities/Utilities";
import { Helmet } from "react-helmet";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;

    // Validation
    if (email.trim() === "") {
      setError("Email field is empty !");
      hideErrorElements();
    } else if (url.trim() === "") {
      setError("Photo url field is empty !");
      hideErrorElements();
    } else if (password.trim() === "") {
      setError("Password field is empty !");
      hideErrorElements();
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("User registration is successful !");
        hideSuccessElements();
        form.reset();
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid md:justify-center md:items-center h-screen">
      <Helmet>
        <title>Toy Mart | Register</title>
      </Helmet>
      <div className="border py-8 px-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-indigo-500 flex items-center">
          Please Register
          <FaUserPlus className="h-6 w-6 text-indigo-500 ml-4" />
        </h2>

        <form onSubmit={handleRegister}>
          <div className="form-control">
            <input
              type="text"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="name"
              placeholder="Full name..."
              id=""
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="email"
              placeholder="Email..."
            />
          </div>

          <div className="form-control">
            <input
              type="url"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="url"
              placeholder="Photo url..."
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="password"
              placeholder="Password..."
            />
          </div>
          <div className="">
            {success && (
              <p className="text-center">
                <small>
                  <i className="text-green-500" id="success-message">
                    {success}
                  </i>
                </small>
              </p>
            )}
            {error && (
              <p className="text-center">
                <small>
                  <i className="text-red-500" id="error-message">
                    {error}
                  </i>
                </small>
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <button
              type="submit"
              className="w-full bg-indigo-500 p-1 rounded-full text-white"
            >
              Register
            </button>
          </div>
        </form>
        <Link to="/login" className="mt-2">
          <small className="text-indigo-500">
            Already a member ?{" "}
            <span className="text-amber-500">Please Login</span>
          </small>
        </Link>
      </div>
    </div>
  );
};

export default Register;
