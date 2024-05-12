
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData();
    const { _id, serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerPhoto } = services;

    return (
        <div>
            <h1>from service details: {services._id}</h1>

            <section className=" text-gray-100">
                <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-cyan-400 rounded-md">


                        <div className="w-full  rounded h-full lg:col-span-7 bg-gray-500" >
                            <img src={serviceImage} alt="" className="h-full object-cover object-center rounded-sm" />
                        </div>


                        <div className="p-6 space-y-2 lg:col-span-5">


                            <div className="space-y-4 divide-y divide-black text-gray-900">

                                <div>
                                    <span className="font-semibold text-lg ">ServiceName</span>
                                    <h3 className="text-xl font-semibold sm:text-4xl">{serviceName}</h3>
                                </div>

                                <div className="pt-2">

                                    <p className="text-lg  font-medium">Service provider</p>
                                    <div className="pt-4 space-y-2">
                                        <img src={providerPhoto} alt="" className="w-24 h-24 object-cover object-center  rounded-full" />
                                        <p className="text-lg font-semibold ">Dr. {providerName}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-3">

                                    <p className="text-lg  font-semibold">Price: {servicePrice}</p>
                                    <p className="lg:text-lg md:text-base text-sm font-semibold ">ServiceArea: {serviceArea} </p>


                                </div>







                                <div className="py-3 space-y-2">
                                    <p className="font-semibold text-lg">OverView</p>
                                    <p>{description}</p>

                                </div>
                                <div className="pt-6">
                                    <Link to={`/bookingDetails/${_id}`}><button className="relative inline-flex items-center justify-center px-4 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
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