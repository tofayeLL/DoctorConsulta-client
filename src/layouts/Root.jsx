import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <div  className="sticky top-0 z-50 shadow-lg ">
                <Nav></Nav>
            </div>

            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;