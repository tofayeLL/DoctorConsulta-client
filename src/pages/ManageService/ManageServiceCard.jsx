import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageServiceCard = ({ service }) => {
    const { _id, serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto } = service;
    return (
        <div>


            {/* card 1 */}
            <div className="rounded-md  my-6 shadow-lg " data-aos="fade-down">

                <div className="" >
                    <img src="" alt="" className="object-cover object-center w-full rounded-t-md h-96  p-4" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8  " >
                    <div className="space-y-3 " >

                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{ }</h2>

                        <p className=" "><span className='font-semibold'>Customization:</span>  { }</p>
                        <p className=" "><span className='font-semibold'>Stock:</span>  { }</p>

                        <div className='flex justify-between items-center'>
                            <p className="text-xl text-red-400 font-semibold">{ }</p>
                            <p className="text-lg font-semibold flex justify-center items-center gap-3">{ } <span><FaRegStar></FaRegStar></span></p>
                        </div>




                    </div>
                    <div className='flex  gap-4 justify-between items-center'>
                        <div className='flex-1'>
                           {/*  <Link to={`/myCraft/${_id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Edit</button></Link> */}

                           <button className="relative w-full rounded  py-2.5 overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative text-xl font-medium">Edit</span>
                            </button>


                        </div>


                        <div className='flex-1 '>
                           {/*  <button onClick={() => handleDelete(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Delete</button> */}

                            <button className="relative w-full rounded  py-2.5 overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative text-xl font-medium">Delete</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>






        </div>
    );
};

export default ManageServiceCard;