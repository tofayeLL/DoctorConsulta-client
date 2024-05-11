import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import BookingDetails from "../pages/BookingDetails/BookingDetails";
import ManageService from "../pages/ManageService/ManageService";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <ProtectedRoutes><Services></Services></ProtectedRoutes>
            },
            {
                path: '/addServices',
                element: <AddService></AddService>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookingDetails',
                element: <BookingDetails></BookingDetails>,
              
            },
            {
                path: '/manageServices',
                element: <ProtectedRoutes><ManageService></ManageService></ProtectedRoutes>,
              
            },
        ]
    },
]);

export default router;