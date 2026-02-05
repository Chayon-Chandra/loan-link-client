import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import MainRoot from "../MainRoot/MainRoot";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AuthLayout from "../MainRoot/AuthLayout";
import AllLoan from "../pages/AllLoan/AllLoan";
import DashBoard from "../pages/DashBoard/DashBoard";




export const router = createBrowserRouter([
  { 

    path: "/",
    Component: MainRoot,
    children: [
        {
            path:'/',
            index: true,
            Component: Home
        },
        {
            path: 'all-loan',
            element: <AllLoan></AllLoan>
        },
        {
            path:'/dashboard',
            element: <DashBoard></DashBoard>
        },

        {
            path:'register',
            Component: Register
        },
        {
            path:'login',
            Component: Login
        }
       
        
    ]

},


// {
//     path:'/',
//     Component: AuthLayout,
//     children:[
//         {
//             path:'register',
//             Component: Register
//         },
//         {
//             path:'login',
//             Component: Login
//         }

        
//     ]
// }
]);