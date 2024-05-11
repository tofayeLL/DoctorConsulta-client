import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div>
            <h1>from service details: {services._id}</h1>

            <section className=" text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-cyan-500 rounded-md">


                        <div className="w-full  rounded h-full lg:col-span-7 bg-gray-500" >
                            <img src="" alt="" className="h-full object-cover object-center rounded-sm" />
                        </div>


                        <div className="p-6 space-y-2 lg:col-span-5">


                            <div className="space-y-4 divide-y divide-black">

                                <div>
                                    <span className="font-semibold">ServiceName</span>
                                    <h3 className="text-2xl font-semibold sm:text-4xl"></h3>
                                </div>

                                <div className="pt-2">
                                    <span className="font-semibold"> Name</span>
                                    <h3 className="text-xl font-semibold"></h3>
                                </div>

                                <div className="space-y-2 pt-3">


                                    <p className="text-lg  font-semibold">Price: </p>
                                    <p className="text-lg font-semibold ">Customization:  </p>



                                    <p className="text-lg font-semibold">Stock: </p>
                                    <p className="text-lg font-semibold ">Processing:  </p>


                                </div>





                                <p className="text-lg pt-3 font-semibold flex justify-start items-center gap-3">Rating:  <span><FaRegStar></FaRegStar></span></p>

                                <div className="py-4">
                                    <p className="font-semibold">OverView</p>
                                    <p></p>

                                </div>
                                <div className="pt-6">
                                    <Link to={'/bookingDetails'}><button className="relative inline-flex items-center justify-center px-4 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-300 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-cyan-100 rounded-md "></span>
                                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-white rounded-md opacity-0 group-hover:opacity-100 "></span>
                                        <span className="relative text-cyan-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-cyan-800 flex gap-2 justify-center items-center">Book now </span>
                                    </button></Link>

                                </div>


                            </div>


                        </div>

                    </div>


                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;