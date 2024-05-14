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
import EditService from "../pages/ManageService/EditService";
import BookedService from "../pages/BookedService/BookedService";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";


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
                element: <Services></Services>,
            },
            {
                path: '/addServices',
                element: <ProtectedRoutes><AddService></AddService></ProtectedRoutes>
            },
            {
                path: '/service/:id',
                element: <ProtectedRoutes><ServiceDetails></ServiceDetails></ProtectedRoutes>,
                loader: ({params}) => fetch(`https://doctor-consulta-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/bookingDetails/:id',
                element: <ProtectedRoutes><BookingDetails></BookingDetails></ProtectedRoutes>,
                loader: ({params}) => fetch(`https://doctor-consulta-server.vercel.app/bookingDetails/${params.id}`)
              
            },
            {
                path: '/manageServices',
                element: <ProtectedRoutes><ManageService></ManageService></ProtectedRoutes>,
              
            },
            {
                path: '/editService/:id',
                element: <ProtectedRoutes><EditService></EditService></ProtectedRoutes>,
                loader:({params}) => fetch(`https://doctor-consulta-server.vercel.app/editService/${params.id}`)
              
            },
            {
                path: '/bookedServices',
                element: <ProtectedRoutes><BookedService></BookedService></ProtectedRoutes>,
                
              
            },
            {
                path: '/toDoServices',
                element: <ProtectedRoutes><ServiceToDo></ServiceToDo></ProtectedRoutes>,
                
              
            },
        ]
    },
]);

export default router;