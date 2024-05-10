
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";




const Nav = () => {
    // const { user, logOutUser } = useContext(AuthContext);
    const { user, logOutUser } = useAuth();


    const handleLogout = () => {
        //logout user
        logOutUser()
            .then(() => {
                console.log('logout successfully');
                toast.success("Logout Successfully");
            }).catch((error) => {
                console.log(error.message);
                toast.error(error.message);

            });
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
                    <a className="font-semibold lg:text-3xl text-base text-cyan-600">DoctorConsulta</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg font-semibold">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/services'}>Services</NavLink></li>

                        <li className="">
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

                    </ul>
                </div>



              

                    <div className="navbar-end">

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

                                    <button onClick={handleLogout} className="btn text-white hover:text-cyan-700 font-semibold lg:text-base text-xs bg-cyan-600 0">Logout</button>




                                </div>

                                :

                                <div className="lg:space-x-3 space-x-2">
                                    <Link to={'/login'}><button className="btn text-white hover:text-cyan-700  font-semibold lg:text-base text-xs bg-cyan-600 0">Login</button></Link>

                                </div>

                        }
                    </div>


              

            </div>

        </div>
    );
};

export default Nav;