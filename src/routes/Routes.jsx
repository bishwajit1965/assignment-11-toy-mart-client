import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import NotFound from "../components/pages/notFound/NotFound";
import AllToys from "../components/pages/allToys/AllToys";
import AddToy from "../components/pages/addToy/AddToy";
import Blog from "../components/pages/blog/Blog";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Toy from "../components/pages/toy/Toy";
import Home from "../components/pages/home/Home";
import MyToys from "../components/pages/myToys/MyToys";
import EditToy from "../components/pages/editToy/EditToy";
import SubCategoryWiseToys from "../components/pages/sbCategoryWiseToys/SubCategoryWiseToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch("https://toy-mart-server.vercel.app/toys"),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "toy-data/:id",
        element: (
          <PrivateRoute>
            <SubCategoryWiseToys />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-mart-server.vercel.app/toy-data?id=${params.id}`),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <Toy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-mart-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/edit-toy/:id",
        element: <EditToy />,
        loader: ({ params }) =>
          fetch(`https://toy-mart-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
