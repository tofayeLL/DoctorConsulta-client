import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const PopularServiceCard = ({ service }) => {
    const { serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto } = service;
    return (
        <div>


            {/* card 1 */}
            <div className="rounded-xl shadow-lg my-6 border-[1px] border-[#e0e0e2]">

                <div className="p-6" >
                    <img src="" alt="" className="object-cover object-center w-full rounded-lg h-96 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8" >
                    <div className="space-y-4" >

                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{}</h2>
                        <p>{description}</p>
                        <div className='flex justify-between items-center'>
                            <p className="text-xl text-red-400 font-semibold">{}</p>
                            <p className="text-lg font-semibold flex justify-center items-center gap-3">{} <span><FaRegStar></FaRegStar></span></p>
                        </div>

                    </div>
                    <Link > <button type="button" className="flex lg:text-xl text-lg items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-500  text-white">View Details</button></Link>
                </div>

            </div>
           


        </div>
    );
};

export default PopularServiceCard;