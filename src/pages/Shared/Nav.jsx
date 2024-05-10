
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";



const Nav = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>

            <div className=" bg-base-100 flex justify-between items-center py-6">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="font-semibold text-xl"><NavLink to={'/'}>Home</NavLink></li>

                            <li className="font-semibold text-xl "><NavLink to={'/services'} >Service</NavLink></li>

                            <li className="font-semibold text-xl">
                                <NavLink >
                                    <select defaultValue={'DASHBOARD'} className="">
                                        <option>Add Service</option>
                                        <option>Manage Service</option>
                                        <option>Booked-Services</option>
                                        <option>Service-To-Do</option>
                                    </select>

                                </NavLink>

                            </li>
                        </ul>
                    </div>
                    <a className="font-semibold text-xl">DoctorConsulta</a>
                </div>
                <div className="">
                    <ul className="flex justify-center items-center  gap-8">
                        <li className="font-semibold text-xl hover:text-cyan-400"><NavLink to={'/'}>Home</NavLink></li>

                        <li className="font-semibold text-xl hover:text-cyan-400"><NavLink to={'/services'} >Service</NavLink></li>

                        <li className="font-semibold text-xl">
                            <NavLink >
                                <select value={"Dashboard"} className=" hover:text-cyan-400">
                                    <option>Add Service</option>
                                    <option>Manage Service</option>
                                    <option>Booked-Services</option>
                                    <option>Service-To-Do</option>
                                </select>
                            </NavLink>

                        </li>

                    </ul>
                </div>
                <div >

                    <div className="space-x-5">
                        {
                            user ?
                                <div className="flex  justify-center items-center gap-2 ">
                                    {/* <h1>{user.email}</h1> */}

                                    <div className="tooltip tooltip-bottom lg:w-14 w-12 rounded-full border-[2px] border-cyan-700 z-10 " /* data-tip={user?.displayName || 'Tofayel'} */  >



                                        <Tooltip id="my-tooltip" className="z-10">
                                            <span>{user?.displayName || 'Tofayel'}</span>
                                        </Tooltip>


                                        <img className="w-full rounded-full p-1" alt="user img" src={user?.photoURL || 'https://ibb.co/18JhpwY'} data-tooltip-id="my-tooltip" />

                                    </div>

                                    <button  className="btn text-white hover:text-cyan-700 font-semibold lg:text-base text-xs bg-cyan-600 0">Logout</button>




                                </div>

                                :

                                <div className="lg:space-x-3 space-x-2">
                                    <Link to={'/login'}><button className="btn text-white hover:text-cyan-700  font-semibold lg:text-base text-xs bg-cyan-600 0">Login</button></Link>
                                    <Link to={'/register'} className="lg:inline md:inline hidden"><button className="btn  text-white hover:text-cyan-700 font-semibold lg:text-base text-xs  bg-cyan-600 0">Register</button></Link>
                                </div>

                        }
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Nav;