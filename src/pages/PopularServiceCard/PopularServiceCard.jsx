
import { Link } from "react-router-dom";


const PopularServiceCard = ({ service }) => {
    console.log(service)
    const { _id, serviceName, serviceImage, servicePrice, description, providerName, providerPhoto } = service;
    return (
        <div id="popularService">


            {/* card 1 */}
            <div className="rounded-xl shadow-lg my-6 ">

                <div className="" >
                    <img src={serviceImage} alt="" className="object-cover object-center w-full rounded-t-lg rounded-b-lg h-80 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between px-6 py-4 space-y-3" >
                    <div className="space-y-2" >

                        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold tracking-wide text-cyan-600 ">{serviceName}</h2>
                        <p className="lg:text-lg text-base">{description.slice(0, 76)}</p>
                        <div className='flex justify-between items-center pb-2'>
                            <p className="text-2xl text-red-500 font-semibold">{servicePrice}</p>

                        </div>
                        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
                            <div className="border-t-[1px] border-gray-400 py-1 ">
                                <p className="text-lg text-cyan-600 font-medium">Service provider</p>
                                <div className="pt-3 space-y-2">
                                    <img src={providerPhoto} alt="" className="w-24 h-24 object-cover object-center  rounded-full" />
                                    <p className="text-lg font-semibold text-cyan-700">Dr. {providerName}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <Link to={`/service/${_id}`}> 

                  {/*   <button type="button" className="flex lg:text-xl text-lg items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-500  text-white">View Details</button> */}

                        <button className="relative w-full rounded  py-2.5 overflow-hidden group bg-[#79bfe7] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 text-gray-800 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative text-xl font-medium">View Details</span>
                        </button>



                    </Link>
                </div>

            </div>



        </div>
    );
};

export default PopularServiceCard;