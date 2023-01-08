import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Cathome from "./pages/Cathome";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopularPage from "./pages/PopularPage";
import FeaturePage from "./pages/FeaturePage";

import "./style.scss"

const Layout = () => {
  return (
    <>
    <Navbar />
    {/* outlet allows the child element to be rendered with the parent */}
    <Outlet />
    <Footer />
    </>
  );
};

// create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/cathome",
        element: <Cathome />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/popular/:id",
        element: <PopularPage />
      },
      {
        path: "/feature/:id",
        element: <FeaturePage />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="popular"></div>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
