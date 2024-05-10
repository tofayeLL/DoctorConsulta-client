import { NavLink } from "react-router-dom";


const Nav = () => {
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
                                    <select value={"Dashboard"} className="">
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
                <div className="space-x-5">
                    <button className="btn"><NavLink to={'/login'} >Sign in</NavLink></button>
                    <button className="btn"><NavLink to={'/register'} >Register</NavLink></button>
                </div>

            </div>

        </div>
    );
};

export default Nav;