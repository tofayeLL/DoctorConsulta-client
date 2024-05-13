import { BsCurrencyDollar } from "react-icons/bs";

import { Link } from "react-router-dom";
import icon1 from '../../../assets/images/doctorVisit.png';
import icon2 from '../../../assets/images/Er visit.png';


const Member = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="p-4 lg:text-5xl md:text-2xl text-xl font-bold leading-none text-[#143566] text-center">How much does DoctorConsulta cost?</h1>
            </div>


            <section className="my-8  rounded-2xl bg-cyan-50  ">

                <div className="container space-y-3  flex flex-col justify-center items-center mx-auto mb-8 mt-6 md:p-6 md:px-12">
                    <h1 className="p-4 lg:text-4xl md:text-2xl text-xl font-bold leading-none text-[#143566] text-center">Seeing a doctor starts with being a member</h1>
                    <p className="lg:text-xl text-lg lg:w-[70%] text-center">This helps us keep online doctor visit costs low, like a store membership to get lower-priced groceries and household goods.</p>
                </div>


                <div className="lg:p-10 md:p-10 p-0">


                    {/* grid card */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8 ">

                        {/* card 1 */}
                        <div className="rounded-2xl shadow-md my-6 p-6  bg-white">


                            <div className="flex flex-col justify-between p-6 space-y-12" >
                                <div className="space-y-10" >
                                    <div className="space-y-6">
                                        <p><span className="bg-cyan-300 px-3 font-semibold rounded-md py-2 text-lg">option 1</span></p>

                                        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-[#143566] ">3-month membership</h1>
                                    </div>



                                    <div className="border-b-4 pb-12 mt-10 space-y-6">

                                        <div className='flex justify-between items-center'>
                                            <p className="text-xl  font-semibold">Membership fee</p>
                                            <p className="text-xl font-semibold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>59</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p className="text-xl  font-semibold">Each doctor visit</p>
                                            <p className="text-xl font-semibold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>40</p>
                                        </div>

                                    </div>


                                    <div className='flex justify-between items-center'>
                                        <p className="lg:text-2xl md:text-xl text-md font-bold">Total due at first visit</p>
                                        <p className="text-2xl font-bold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>99</p>
                                    </div>

                                </div>
                                <Link > {/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-500 text-xl  text-white">Choose 3-month membership</button> */}

                                    <button className="relative inline-flex items-center justify-center p-4 px-5 py-4 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-full  group hover:ring-1 hover:ring-cyan-200 w-full">
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-500"></span>
                                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-200-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                        <span className="relative text-white lg:text-xl  ">Choose 3-month membership</span>
                                    </button>


                                </Link>
                            </div>

                        </div>

                        {/* card 2 */}
                        <div className="rounded-2xl shadow-md my-6 p-6  bg-white">


                            <div className="flex flex-col justify-between p-6 space-y-12" >
                                <div className="space-y-10" >
                                    <div className="space-y-6">
                                        <p><span className="bg-cyan-300 px-3 font-semibold rounded-md py-2 text-lg">option 2</span></p>

                                        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-[#143566] ">1.5-year membership</h1>
                                    </div>



                                    <div className="border-b-4 pb-6 mt-10 space-y-6">

                                        <div className='flex justify-between items-center'>
                                            <p className="text-xl  font-semibold">Membership fee</p>
                                            <p className="text-xl font-semibold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>180</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p className="text-xl  font-semibold">First doctor visit <br /><span className="text-sm font-normal opacity-60">$40 per visit after first visit</span></p>
                                            <p className="text-xl font-semibold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>0</p>
                                        </div>

                                    </div>


                                    <div className='flex justify-between items-center'>
                                        <p className="lg:text-2xl md:text-xl text-md  font-bold">Total due at first visit</p>
                                        <p className="text-2xl font-bold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>180</p>
                                    </div>

                                </div>
                                <Link > {/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-500 text-xl  text-white">Choose 1.5-year membership</button> */}

                                    <button className="relative inline-flex items-center justify-center p-4 px-5 py-4 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-full  group hover:ring-1 hover:ring-cyan-200 w-full">
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-500"></span>
                                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-200-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                        <span className="relative text-white lg:text-xl ">Choose 1.5-year membership</span>
                                    </button>
                                </Link>




                            </div>

                        </div>


                    </div>


                    <div>
                        <div className='border-b-4 border-cyan-100 text-[#143566] text-4xl font-bold pb-8 pt-6'>
                            <h1>By comparison</h1>

                        </div>

                        <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10'>


                            <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                                <div>
                                    <img src={icon1} alt="" />

                                </div>
                                <div className='lg:text-start md:text-start text-center'>
                                    <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Average in-person doctor visit</h4>

                                </div>

                            </div>
                            <div>
                                <p className="text-2xl text-orange-400 font-bold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>150+</p>
                            </div>



                        </div>



                        <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center  py-10'>


                            <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                                <div>
                                    <img src={icon2} alt="" />

                                </div>
                                <div className='lg:text-start md:text-start text-center'>
                                    <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Average ER visit</h4>

                                </div>

                            </div>
                            <div>
                                <p className="text-2xl text-orange-400 font-bold flex justify-center items-center "> <span><BsCurrencyDollar></BsCurrencyDollar></span>2,000+</p>
                            </div>



                        </div>





                    </div>







                </div>




            </section>



        </div>
    );
};

export default Member;