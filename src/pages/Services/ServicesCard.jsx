
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { _id, serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerPhoto } = service;
    return (
        <div>



            <ul className="p-2 lg:p-4 ">
                <li className="bg-slate-200 rounded-lg shadow-lg">
                    <article>
                        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">

                            <div className=" lg:col-span-7  p-5 ">
                                <img src={serviceImage} alt="" className="object-cover object-center w-full   sm:h-96 h-72 rounded-lg shadow-sm" />
                            </div>



                            <div className="p-5 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-3xl  group-focus:underline text-cyan-600">{serviceName}</h3>
                                <p className=" text-lg">{description}</p>

                                <p className="text-xl  font-semibold">Price: {servicePrice}</p>


                                <div className="pb-2">
                                  
                                    <p className="text-lg font-semibold flex justify-start items-center gap-2">
                                        <span><FaLocationDot></FaLocationDot></span> {serviceArea}</p>
                                </div>

                                <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
                                    <div className="border-t-[1px] border-gray-700 py-2">
                                        <p className="text-lg font-medium text-cyan-600">Service provider</p>
                                        <div className="py-4 space-y-2">
                                            <img src={providerPhoto} alt="" className="w-24 h-24 object-cover object-center  rounded-full" />
                                            <p className="text-lg font-semibold ">Dr. {providerName}</p>
                                        </div>

                                    </div>

                                    <div className="">
                                        <Link to={`/service/${_id}`}>
                                            <button className="relative inline-flex items-center justify-start px-6 py-2.5 overflow-hidden font-medium transition-all bg-[#42a7eb] rounded hover:bg-white group ">
                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative font-semibold text-xl w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>

                                            </button>
                                        </Link>
                                    </div>
                                </div>



                            </div>





                        </div>
                    </article>
                </li>



            </ul>
        </div>
    );
};

export default ServicesCard;