import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import MainRoot from "../MainRoot/MainRoot";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllLoan from "../pages/AllLoan/AllLoan";
import DashBoard from "../MainRoot/DashBoard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LoanDetails from "../pages/AllLoan/LoanDetails/LoanDetails";
import ApplyNow from "../pages/AllLoan/ApplyNow/ApplyNow";
import PrivetRoutes from "../Componentes/PrivetRoutes/PrivetRoutes";
import MyLoan from "../pages/DashBoard/MyLoan/MyLoan";
import Manager from "../pages/DashBoard/Manager/Manager";
import Admin from "../pages/DashBoard/Admin/Admin";
import UpdateLoan from "../pages/DashBoard/UpdateLoan/UpdateLoan";
import Profile from "../pages/DashBoard/Profile/Profile";
import ExploreLoans from "../pages/Home/ExploreLoans/ExploreLoans";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-loan",
        element: <AllLoan></AllLoan>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "loan-details/:id",
        loader: ({ params }) =>
          fetch(`https://loan-link-api.vercel.app/loan-details/${params.id}`),
        element: <LoanDetails></LoanDetails>,
      },
      {
        path: "apply-now",
        element: <ApplyNow></ApplyNow>,
      },
      {
        path: "explore-loans",
        element: <ExploreLoans></ExploreLoans>,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <DashBoard></DashBoard>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "my-loan",
        element: <MyLoan></MyLoan>,
      },
      {
        path: "manager",
        element: <Manager></Manager>,
      },
      {
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "update-loan/:id",
        element: <UpdateLoan></UpdateLoan>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
