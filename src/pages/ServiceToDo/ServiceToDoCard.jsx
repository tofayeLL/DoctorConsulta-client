
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ServiceToDoCard = ({ booked }) => {
    const { setLoading } = useAuth()

    const { _id, userName, userEmail, serviceName, serviceImage, servicePrice, serviceId, specialInstruction, date, status } = booked;

    // filter craft data depends on customization
    const handleFilter = (filter, id, status) => {

        if (filter === status) {
            return toast.warn("Already Exist");

        }
        else if (filter === 'pending') {
            setLoading(true)
            const serviceStatus = 'pending'
            axios.patch(`https://doctor-consulta-server.vercel.app/servicesToDo/${id}`, { serviceStatus })
                .then(data => {
                    setLoading(false);
                    console.log(data.data)

                })

        }
        else if (filter === 'working') {
            setLoading(true)
            const serviceStatus = 'working'
            axios.patch(`https://doctor-consulta-server.vercel.app/servicesToDo/${id}`, { serviceStatus })
                .then(data => {
                    setLoading(false);
                    console.log(data.data);
                })

        }
        else if (filter === 'completed') {
            setLoading(true)
            const serviceStatus = 'completed'
            axios.patch(`https://doctor-consulta-server.vercel.app/servicesToDo/${id}`, { serviceStatus })
                .then(data => {
                    setLoading(false);
                    console.log(data.data);
                })

        }
    }




    return (
        <div className="container mx-auto">
            <ul className=" ">
                <li className="bg-slate-200 shadow-md  rounded-lg mb-5">
                    <article>
                        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">

                            <div className=" lg:col-span-4  p-2 flex items-center ">
                                <img src={serviceImage} alt="" className="object-cover object-center w-96   sm:h-full h-72 rounded-lg" />
                            </div>

                            <div className="p-5 space-y-2 lg:col-span-8">

                                <div className="flex gap-5 lg:flex-row flex-col justify-between lg:items-center items-start">


                                    <div className="space-y-1">
                                        <h3 className="text-xl text-cyan-600 font-semibold sm:text-2xl  group-focus:underline">{serviceName}</h3>
                                        <p className="lg:text-lg text-base ">ServiceId: {serviceId}</p>

                                        <p className=" lg:text-lg text-base">Price: {servicePrice}</p>
                                        <p className="border-b-2 border-cyan-600 pb-3 lg:text-lg text-base">Date: {date}</p>

                                        <div className="pt-1">
                                            <span className="lg:text-lg text-base font-semibold text-cyan-600">Booking User Info</span>
                                            <p className="lg:text-lg text-base">Name: {userName}</p>
                                            <p className="lg:text-lg text-base">Email: {userEmail}</p>
                                            <p className="lg:text-lg text-base">Address: {specialInstruction}</p>

                                        </div>



                                    </div>




                                    <div className="">

                                        <details className="dropdown">
                                            <summary className="m-1 btn w-40 text-lg border-[1] border-cyan-700">{status?.serviceStatus}</summary>
                                            <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-28 ">
                                                <li onClick={() => handleFilter('pending', _id, status?.serviceStatus)}><a>pending</a></li>
                                                <li onClick={() => handleFilter('working', _id, status?.serviceStatus)}><a>working</a></li>
                                                <li onClick={() => handleFilter('completed', _id, status?.serviceStatus)}><a>completed</a></li>
                                            </ul>
                                        </details>
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

export default ServiceToDoCard;