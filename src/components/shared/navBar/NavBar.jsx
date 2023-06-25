import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiUserCircle, HiMenu, HiX } from "react-icons/hi";
import "./NavBar.css";
import { useContext } from "react";
import "./NavBar.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaTripadvisor } from "react-icons/fa";

const NavBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [openNavMenu, setNavMenuOpen] = useState(false);

  // Logout
  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "All Toys",
      path: "/all-toys",
    },
    {
      id: 3,
      name: "My Toys",
      path: "/my-toys",
    },
    {
      id: 4,
      name: "Add a Toy",
      path: "/add-toy",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 6,
      name: "Register",
      path: "/register",
    },
  ];

  return (
    <div className="z-50 md:flex md:justify-between bg-zinc-50 md:px-3 md:py-3 header-content sticky top-0">
      <div className="invisible lg:visible uppercase flex items-center">
        {/* <FaTripadvisor className="w-8 h-8 mr-3" /> */}
        <img src="/webDevProF.png" alt="" className="w-8 h-8 mr-3" />
        <Link to="/">
          <h1 className="font-bold uppercase md:text-2xl text-blue-500">
            The Toy Mart
          </h1>
        </Link>
      </div>

      <nav className="">
        <div onClick={() => setNavMenuOpen(!openNavMenu)} className="md:hidden">
          <span className="">
            {openNavMenu === true ? (
              <HiX className="h-10 w-10 text-purple-600" />
            ) : (
              <HiMenu className="h-10 w-10 text-purple-600" />
            )}
          </span>
        </div>
        <ul
          className={`grid bg-zinc-50  md:flex font-bold md:justify-between md:space-x-10 md:items-center lg:items-center items-center absolute md:static duration-1000 w-full px-1 ${
            openNavMenu ? "top-20" : "-top-48"
          }`}
        >
          {routes.map((route) => {
            return (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {route.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <div className="md:flex justify-between space-x-6 relative">
        {user ? (
          <>
            <Link
              onClick={handleLogOut}
              className="absolute -top-8 right-14 md:top-2 md:right-40 lg:right-16 lg:top-0 font-bold"
            >
              <button>Logout</button>
            </Link>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="absolute -top-8 right-36 md:top-2 md:right-8 lg:top-1 lg:right-14 font-bold"
            >
              Login
            </NavLink>
          </>
        )}

        <NavLink>
          <div className="absolute -top-8 right-2 md:top-2 md:right-20 lg:-top-1 lg:right-1 h-9 w-9">
            {user ? (
              <>
                <div
                  className="tooltip tooltip-right capitalize"
                  data-tip={user?.displayName}
                >
                  <img
                    src="https://i.ibb.co/MgsDqCZ/FB-IMG-1678691214526.jpg"
                    alt=""
                    className="rounded-full profile-image relative"
                  />
                </div>
              </>
            ) : (
              <>
                <HiUserCircle className="h-10 w-10 text-blue-500" />
              </>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
