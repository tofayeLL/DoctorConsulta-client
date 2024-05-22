import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ServiceToDoCard from "./ServiceToDoCard";
import { Helmet } from "react-helmet";


const ServiceToDo = () => {


    const { user } = useAuth();
    const [bookedService, setBookedService] = useState([]);

    useEffect(() => {
        // get
        axios.get(`https://doctor-consulta-server.vercel.app/servicesToDo/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setBookedService(data.data);
            })
    }, [user?.email])

    if (bookedService.length <= 0) {
        return <div className="flex flex-col p-4 text-center my-20 font-bold text-cyan-500 justify-center items-center lg:text-4xl text-2xl">There is no service available for you</div>
    }


    return (
        <div>


            <Helmet>
                <title>Service To Do</title>
            </Helmet>



           
            <div>
                {
                    bookedService.map(booked => <ServiceToDoCard
                        booked={booked}
                        key={booked._id}></ServiceToDoCard>)
                }
            </div>


        </div>
    );
};

export default ServiceToDo;