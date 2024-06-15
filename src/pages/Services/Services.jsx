import axios from "axios";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Helmet } from "react-helmet";
// import { useQuery } from "@tanstack/react-query";


const Services = () => {


    const [services, setServices] = useState([]);
    const [searchText, setSearchText] = useState('');



    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText)
        setSearchText(searchText);
        // e.target.reset();
     
    }

 


    useEffect(() => {
        // get
        axios.get(`http://localhost:5000/services?search=${searchText}`)
            .then(data => {
                // console.log(data.data);
                setServices(data.data);              
                
            })
    }, [services, searchText])


    // console.log(services)

  

     

   


    return (
        <div>

            <Helmet>
                <title>All Services</title>
            </Helmet>

         

           

            <div className="text-center bg-slate-200 py-8 lg:mx-4 rounded-b-md space-y-3">
                <h1 className="lg:text-3xl text-xl font-semibold text-cyan-500">Search any kind of services you need</h1>

                <div className="lg:max-w-xl max-w-sm mx-auto ">

                    <form onSubmit={handleSearch}>
                        <label className="input input-bordered flex  items-center gap-2 ">
                            <input type="text" name="search" className="grow " placeholder="Search here..." />
                            <button className="badge badge-info py-2.5 text-black  px-2">search</button>
                        </label>
                    </form>
                </div>

            </div>




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