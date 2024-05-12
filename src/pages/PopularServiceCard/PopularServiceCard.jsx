import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const PopularServiceCard = ({ service }) => {
    const { _id ,serviceName, serviceImage, servicePrice,  description , providerName,  providerPhoto } = service;
    return (
        <div>


            {/* card 1 */}
            <div className="rounded-xl shadow-lg my-6 border-[1px] border-[#e0e0e2]">

                <div className="p-6" >
                    <img src={serviceImage} alt="" className="object-cover object-center w-full rounded-lg h-96 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between px-6 pb-6 space-y-5" >
                    <div className="space-y-4" >

                        <h2 className="text-2xl font-semibold tracking-wide text-cyan-600 ">{serviceName}</h2>
                        <p>{description}</p>
                        <div className='flex justify-between items-center'>
                            <p className="text-2xl text-red-500 font-semibold">{servicePrice}</p>
                         
                        </div>
                        <div className="border-t-[1px] border-[#54b3f3] py-2">
                            <p className="text-lg text-cyan-600 font-medium">Service provider</p>
                           <div className="pt-4 space-y-2">
                           <img src={providerPhoto} alt="" className="w-24 h-24 object-cover object-center  rounded-full" />
                           <p className="text-lg font-semibold text-cyan-700">Dr. {providerName}</p>
                           </div>

                        </div>

                    </div>
                    <Link to={`/services/${_id}`}> <button type="button" className="flex lg:text-xl text-lg items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-500  text-white">View Details</button></Link>
                </div>

            </div>
           


        </div>
    );
};

export default PopularServiceCard;