import { Link } from "react-router-dom";
import image from '../../assets/images/errorpage.jpg'

const ErrorPage = () => {
    return (
        <div >


            <section className="flex items-center h-full  dark:bg-gray-50 dark:text-gray-800 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-0  ">
                         
                           <img src={image} alt="" />
                        </h2>
                        <p className="text-sm font-semibold md:text-2xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 text-sm mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'} rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded  "><button className="btn bg-cyan-600 text-white text-base rounded-full">Go Back Home</button> </Link>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default ErrorPage;