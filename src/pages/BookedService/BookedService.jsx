import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";



const BookedService = () => {
    const { user } = useAuth();
    const [bookedService, setBookedService] = useState([]);

    useEffect(() => {
        // get
        axios.get(`https://doctor-consulta-server.vercel.app/bookedServices/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setBookedService(data.data);
            })
    }, [user?.email])

    // console.log(bookedService);
    if (bookedService.length <= 0) {
        return <div className="flex flex-col p-4 text-center my-20 font-bold text-cyan-500 justify-center items-center lg:text-4xl text-2xl">There is no service available for you</div>
    }



    return (
        <div>


            <Helmet>
                <title>Booked Service</title>
            </Helmet>


            <div className="overflow-x-auto  border-[1px] border-[#e0e0e2] rounded-md">
                <table className="table ">

                    <thead>
                        <tr className="bg-[#a6d8f5] text-lg font-semibold ">
                            <th>ServiceId</th>
                            <th>ProviderEmail</th>
                            <th>ServiceName</th>
                            <th>ServicePrice</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedService.map(booked =>
                                <tr key={booked._id} className="hover">
                                    <td>{booked._id}</td>
                                    <td>{booked.providerEmail}</td>
                                    <td>{booked.serviceName}</td>
                                    <td>{booked.servicePrice}</td>
                                    <td>{booked.date}</td>




                                    <td className="">

                                        <span className=" font-semibold rounded-md  text-cyan-500 text-lg  flex">
                                            <button>{booked.status?.serviceStatus}</button>
                                        </span>
                                    </td>





                                </tr>

                            )
                        }

                    </tbody>
                </table>


            </div>


        </div>
    );
};

export default BookedService;