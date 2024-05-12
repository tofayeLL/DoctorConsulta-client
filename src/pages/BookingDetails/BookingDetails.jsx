import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";


const BookingDetails = () => {
    const { user } = useAuth();

    const service = useLoaderData();
    const { _id,serviceName, serviceImage, servicePrice,  providerName, providerEmail } = service;


    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const servicePrice = form.servicePrice.value;
        const serviceId = form.serviceId.value;
        
        const specialInstruction = form.specialInstruction.value;
        const date = form.date.value;


        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
     

        const serviceStatus = "pending";
        const status = {serviceStatus}
        // console.log(status);
        

        const service = { userName, userEmail, serviceName, serviceImage, servicePrice, serviceId,  specialInstruction, date, providerName, providerEmail, status}
        console.log(service);

          // post
          axios.post('http://localhost:5000/bookedServices', service)
       
        .then(data => {
            console.log(data.data);
            if (data.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'added service successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();

            }
        })

       

    }






    return (
        <div className="lg:mt-0 bg-cyan-400  lg:p-14 md:p-14 p-6">



            <div className="max-w-4xl mx-auto  bg-cyan-100 shadow-xl">


                <form onSubmit={handlePurchase} className="card-body" >
                    <h1 className="text-4xl font-bold text-cyan-500">Purchase Service</h1>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">

                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">User Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="userName" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold text">Service Name</span>
                                </label>
                                <input type="text" name="serviceName" defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" required />
                            </div>
                            {/* 3 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Price</span>
                                </label>
                                <input type="text" defaultValue={servicePrice} name="servicePrice" placeholder="Service Price" className="input input-bordered" required />
                            </div>

                            {/* 4 */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Special Instruction</span>
                                </label>
                                <input type="text" name="specialInstruction" placeholder="type your address" className="input input-bordered" required />
                            </div>



                        </div>


                        {/* right side  */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">User Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email} name="userEmail" placeholder="User Email" className="input input-bordered" required />
                            </div>
                               {/* 3*/}
                               <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Id</span>
                                </label>
                                <input type="text" defaultValue={_id} name="serviceId" placeholder="Service Id" className="input input-bordered" required />
                            </div>


                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Image</span>
                                </label>
                                <input type="text" defaultValue={serviceImage} name="serviceImage" placeholder="Image Url" className="input input-bordered" required />
                            </div>
                         
                            {/* 4*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Taking Date</span>
                                </label>
                                <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                            </div>



                        </div>



                    </div>
                  

                    {/* service provider info */}
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Name</span>
                        </label>

                        <input type="text" defaultValue={providerName} name="providerName" placeholder="Provider Name" className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Email</span>
                        </label>

                        <input type="text" defaultValue={providerEmail} name="providerEmail" placeholder="Provider Email" className="input input-bordered" required />


                    </div>
                  



                    <div className="form-control mt-6">
                        <input type="submit" value="Purchase" className="btn text-xl text-white outline-non bg-cyan-500" />
                    </div>


                </form>


            </div>

        </div>
    );
};

export default BookingDetails;