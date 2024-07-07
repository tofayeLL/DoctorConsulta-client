import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
// import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const PopularService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // get
        axios.get('https://doctor-consulta-server.vercel.app/popularServices')
            .then(data => {
                console.log(data.data);
                setServices(data.data.slice(0, 6))
            })
    }, [])

    console.log(services)

    return (
        <div className="">
            <div className="space-y-3 lg:my-2">


                <h1 className="lg:text-5xl text-2xl text-center font-bold  " >
                    Our Popular Services

                    {/*  <Typewriter
                        words={['Our Popular Services']}
                        loop={5}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    /> */}

                </h1>
                <p className="lg:w-[68%] mx-auto lg:text-lg md:text-lg text-sm text-center ">Explore a curated selection of top-notch medical solutions tailored to your needs, showcasing the expertise and commitment of Doctor Consulta</p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6">
                {
                   services.length > 0  ? services.map(service =>
                        <PopularServiceCard
                            service={service}
                            key={service._id}></PopularServiceCard>) : ""
                }


            </div>
            <div className="mt-3">
                <Link to={'/services'}><button className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-cyan-100 rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-cyan-700 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white flex gap-2 justify-center items-center">Show All <span><FaArrowRight></FaArrowRight></span></span>
                </button></Link>
            </div>

        </div>
    );
};

export default PopularService;