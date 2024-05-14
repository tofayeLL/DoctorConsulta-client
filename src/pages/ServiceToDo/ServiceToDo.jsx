import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ServiceToDoCard from "./ServiceToDoCard";


const ServiceToDo = () => {


    const { user } = useAuth();
    const [bookedService, setBookedService] = useState([]);

    useEffect(() => {
        // get
        axios.get(`http://localhost:5000/servicesToDo/${user?.email}`)
            .then(data => {
                console.log(data.data);
                setBookedService(data.data);
            })
    }, [user?.email])

  if(bookedService.length <= 0){
    return <p>There is no service for you</p>
  }


    return (
        <div>
            <h1>this is from service to do:{bookedService.length}</h1>
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