
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";


const ManageServiceCard = ({ service, services, setServices }) => {
    const { _id, serviceName, serviceImage, servicePrice, serviceArea, description } = service;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/myService/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });

                                // delete from layout
                               const remainingService = services.filter(item => item._id !== _id);
                               setServices(remainingService);

                            }
                        })



                }
            });








    }


    return (
        <div>


            {/* card 1 */}
            <div className="rounded-md  my-6 shadow-lg " data-aos="fade-down">

                <div className="" >
                    <img src={serviceImage} alt="" className="object-cover object-center w-full rounded-t-md h-96  p-4" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8  " >
                    <div className="space-y-3 " >

                        <h2 className="text-2xl font-semibold tracking-wide text-cyan-600 ">{serviceName}</h2>

                        <p className=" "><span className='font-semibold'></span>  {description}</p>
                        <p className=" "><span className='font-semibold'></span>  { }</p>

                        <div className='space-y-3'>
                            <p className="text-2xl text-red-400 font-semibold">{servicePrice}</p>
                            <p className="text-lg font-semibold flex justify-start items-center gap-3"><span><FaLocationDot ></FaLocationDot></span>{serviceArea} </p>
                        </div>




                    </div>
                    <div className='flex  gap-4 justify-between items-center'>
                        <div className='flex-1'>
                            {/*  <Link to={`/myCraft/${_id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Edit</button></Link> */}

                            <button className="relative w-full rounded  py-2.5 overflow-hidden group bg-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 text-gray-800 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative text-xl font-medium">Edit</span>
                            </button>


                        </div>


                        <div className='flex-1 '>
                            {/*  <button onClick={() => handleDelete(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Delete</button> */}

                            <button onClick={() => handleDelete(_id)} className="relative w-full rounded  py-2.5 overflow-hidden group bg-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400 text-gray-800 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
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