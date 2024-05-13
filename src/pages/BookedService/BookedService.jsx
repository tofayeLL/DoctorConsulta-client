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



    return (
        <div>


            <Helmet>
                <title>Booked Service</title>
            </Helmet>

            <div className="overflow-x-auto  border-[1px] border-[#e0e0e2] rounded-md">
                <table className="table ">

                    <thead>
                        <tr className="bg-cyan-200 text-lg font-semibold ">
                            <th>userName</th>
                            <th>userEmail</th>
                            <th>serviceName</th>
                            <th>servicePrice</th>
                            <th>date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedService.map(booked =>
                                <tr key={booked._id} className="hover">
                                    <td>{booked.userName}</td>
                                    <td>{booked.userEmail}</td>
                                    <td>{booked.serviceName}</td>
                                    <td>{booked.servicePrice}</td>
                                    <td>{booked.date}</td>




                                    <td className="">

                                        <span className=" font-semibold rounded-md  text-cyan-600 text-lg  flex">
                                            <button>Pending</button>
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