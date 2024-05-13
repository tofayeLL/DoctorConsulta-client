import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet";

const ManageService = () => {
    const {user} = useAuth();
   

    const [services, setServices] = useState([]);

    useEffect(() => {
        // get
        axios.get(`https://doctor-consulta-server.vercel.app/myServices/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setServices(data.data)
            })
    }, [user?.email])
    


    return (
        <div>
            
            <Helmet>
                <title>Manage Service</title>
            </Helmet>
           
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    services.map(service => <ManageServiceCard 
                        
                        service={service}
                        services={services}
                        setServices={setServices}
                        key={service._id}></ManageServiceCard> )
                }
            </div>
            

        </div>
    );
};

export default ManageService;