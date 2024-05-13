
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";




const Nav = () => {
    // const { user, logOutUser } = useContext(AuthContext);
    const { user, logOutUser } = useAuth();
    const [theme, setTheme] = useState('light');


    const handleLogout = () => {
        //logout user
        logOutUser()
            .then(() => {
                // console.log('logout successfully');
                toast.success("Logout Successfully");
            }).catch((error) => {
                // console.log(error.message);
                toast.error(error.message);

            });
    }



    // theme useEffects for store theme in local storage

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])


    //   theme handler
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light')
        }
    }










    return (
        <div>

            <div className="navbar bg-base-100 py-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">

                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/services'}>Services</NavLink></li>
                            <li className="">
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="p-2 w-44">
                                        <li className="text-base"><NavLink to={'/addServices'}>Add Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/manageServices'}>Manage Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/bookedServices'}>Booked Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/toDoServices'}>Service To Do</NavLink></li>
                                    </ul>
                                </details>
                            </li>


                        </ul>
                    </div>
                    <a className="font-bold lg:text-3xl text-base text-cyan-500">DoctorConsulta</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg font-semibold">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/services'}>Services</NavLink></li>

                        {
                            user && <li className="">
                                <details >
                                    <summary >Dashboard</summary>
                                    <ul className="p-2  w-44 ">
                                        <li className="text-base "><NavLink to={'/addServices'}>Add Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/manageServices'}>Manage Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/bookedServices'}>Booked Service</NavLink></li>
                                        <li className="text-base"><NavLink to={'/toDoServices'}>Service To Do</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                        }

                    </ul>
                </div>





                <div className="navbar-end space-x-3">


                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"   onChange={handleTheme} className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>







                    {
                        user ?

                            <div className="flex  justify-center items-center gap-4 ">
                                {/* <h1>{user.photoURL}</h1> */}
                                {/* <h1>{user.email}</h1> */}

                                <div className="tooltip tooltip-bottom lg:w-16 w-12 rounded-full border-[2px] border-cyan-400 z-20 " /* data-tip={user?.displayName || 'Tofayel'} */  >



                                    <Tooltip id="my-tooltip" className="z-20">
                                        <span>{user?.displayName || 'Tofayel'}</span>
                                    </Tooltip>


                                    <img className="w-full rounded-full p-1" alt="user img" src={user?.photoURL || 'https://ibb.co/18JhpwY'} data-tooltip-id="my-tooltip" />

                                </div>

                                <button onClick={handleLogout} className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-cyan-500 rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative lg:text-lg md:text-lg text-sm text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Log out</span>
                                </button>




                            </div>

                            :

                            <div className="lg:space-x-3 space-x-2">
                                <Link to={'/login'}><button className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-cyan-500 rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Log in</span>
                                </button></Link>

                            </div>

                    }
                </div>




            </div>

        </div>
    );
};

export default Nav;