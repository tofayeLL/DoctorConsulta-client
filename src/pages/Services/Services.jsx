import axios from "axios";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Helmet } from "react-helmet";


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        // get
        axios.get('http://localhost:5000/services')
            .then(data => {
                console.log(data.data);
                setServices(data.data);
            })
    }, [])


// console.log(services)



    return (
        <div>
            
            <Helmet>
                <title>Services</title>
            </Helmet>
           
            <div>
                {
                    services.map(service => <ServicesCard 
                        service={service}
                        key={service._id}></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;