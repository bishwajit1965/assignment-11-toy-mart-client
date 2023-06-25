import { useContext } from "react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../../utilities/Utilities";
import { Helmet } from "react-helmet";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { user, googleSignIn, userLogin } = useContext(AuthContext);

  // User will be redirected to the desired page he or she wanted to go
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailPasswordLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email.trim() === "") {
      setError("Email field is empty !");
      hideErrorElements();
    } else if (password.trim() === "") {
      setError("Password field is empty !");
      hideErrorElements();
    }

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User log in is successful !");
        hideSuccessElements();
      })
      .catch((error) => {
        console.log(error);
        setError("User login encountered an error !");
        hideErrorElements();
      });
  };

  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User login successful !!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("Login encountered an error");
      });
  };

  return (
    <div className="grid md:justify-center md:items-center h-screen">
      <Helmet>
        <title>Toy Mart | Log In</title>
      </Helmet>

      <div className="border py-8 px-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-indigo-500">
          Please Login
        </h2>
        {user ? (
          <p className="text-center">
            <span className="text-green-600 font-bold">Welcome ! </span>
            <small className="text-indigo-500">{user?.email}</small>{" "}
          </p>
        ) : (
          ""
        )}
        <form onSubmit={handleEmailPasswordLogIn}>
          <div className="form-control">
            <input
              type="email"
              name="email"
              className="border rounded-full mb-4 py-1 px-3"
              id=""
              placeholder="Email..."
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              className="border rounded-full mb-4 py-1 px-3"
              id=""
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
          <div className="form-control w-full mb-4">
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-500 text-white py-2"
            >
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleLogIn}
          className="rounded-full border w-80 p-1 flex"
        >
          <FaGoogle className="h-6 w-6 text-red-500" />{" "}
          <span className="text-1xl font-bold ml-2">Log in</span>
        </button>
        <div className="flex justify-between items-center">
          <Link to="/register" className="mt-2">
            <small className="text-indigo-500">
              Not a member yet ?{" "}
              <span className="text-amber-500">Please Register</span>{" "}
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
