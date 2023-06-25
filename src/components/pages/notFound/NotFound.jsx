import { NavLink } from "react-router-dom";
import "./NotFound.css";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Toy Mart | 404</title>
      </Helmet>
      <div className="content">
        <h1 className="font-bold">404 Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <NavLink to="/">
          <button className="bg-indigo-500 py-1 px-4 rounded-md text-white mt-2">
            {" "}
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
