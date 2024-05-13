import { useContext, useState } from "react";
// import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { signInUser, googleLogin } = useContext(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);



        //sign in user
        signInUser(email, password)

            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                e.target.reset();
                toast.success("Login Successfully");
            })

            .catch((error) => {
                console.log(error.message);
                toast.error(error.message.replace('auth/', 'userEmail or password-').replace('-credential', ''));
            })


    }


    const handleGoogleLogin = () => {
        // console.log('goggle login click')
        // goggle login handler
        googleLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }











    return (
        <div>


            <Helmet>
                <title>Login</title>
            </Helmet>


            <div className="flex flex-col  justify-center items-center bg-cyan-400 ">


                <div className="flex flex-col justify-center  w-full max-w-lg  mx-auto space-y-4 my-6 bg-white shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md" >



                    <div className=" mx-auto text-cyanbg-cyan-500">
                        <h1 className="lg:text-4xl text-xl text-cyan-700 font-bold mb-6 ">Login to your account</h1>
                    </div>


                    <form onSubmit={handleLogin} className="lg:w-[70%] w-full mx-auto space-y-5 rounded-lg " >

                        <div>
                            <p className="mb-1 font-medium">User Email</p>
                            <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
                        </div>

                        <div >
                            <p className="mb-1 font-medium"> Password</p>

                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div>
                        </div>


                        <div>
                            <button className="btn hover:text-cyan-700 text-white text-xl w-full bg-cyan-700" type="submit">Login</button>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>


                    </form>



                    <div className="lg:w-[70%] w-full mx-auto" >

                        <Link><button onClick={handleGoogleLogin} className="btn w-full bg-cyan-700 text-white"><FaGoogle className="text-2xl" ></FaGoogle> <span className="text-lg">Login with Google</span></button></Link>

                    </div>




                    <div className="text-center " >
                        <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/register'} className="btn-active text-cyan-800 btn-link">Register</Link></p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Login;