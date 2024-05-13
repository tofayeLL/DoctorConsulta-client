import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ManageServiceCard from "./ManageServiceCard";

const ManageService = () => {
    const {user} = useAuth();
   

    const [services, setServices] = useState([]);

    useEffect(() => {
        // get
        axios.get(`http://localhost:5000/myServices/${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setServices(data.data)
            })
    }, [user?.email])
    


    return (
        <div>
           
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