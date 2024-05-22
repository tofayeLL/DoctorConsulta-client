import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../pages/Shared/Nav";
import Footer from "../pages/Shared/Footer";
import { RotatingLines } from "react-loader-spinner";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div  className="sticky top-0 z-50 shadow-lg ">
                <Nav></Nav>
            </div>


            <div className="lg:px-0 md:px-2 px-2">
                {
                    navigation.state === "loading" ?

                        <div className="flex flex-col justify-center items-center">
                            <RotatingLines
                                visible={true}
                                height="100"
                                width="200"
                                color="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />

                        </div>

                        :
                        <Outlet></Outlet>
                }
            </div>

            

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;