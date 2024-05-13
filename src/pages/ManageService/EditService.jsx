import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditService = () => {
    const services = useLoaderData();
    const { _id, serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto } = services;


    const handleAdd = (e) => {



        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const servicePrice = form.servicePrice.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;


        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const providerPhoto = form.providerPhoto.value;


        const service = { serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto }
        // console.log(service);

        // update 
        axios.put(`https://doctor-consulta-server.vercel.app/service/${_id}`, service)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })




    }





    return (
        <div>


            <Helmet>
                <title>Update Service</title>
            </Helmet>


            <div className="lg:mt-0 bg-cyan-400  lg:p-14 md:p-14 p-6">



                <div className="max-w-4xl mx-auto  bg-cyan-100 shadow-xl">


                    <form onSubmit={handleAdd} className="card-body" >
                        <h1 className="text-4xl font-bold text-cyan-500">Update Service</h1>

                        <div className="grid grid-cols-2 gap-6 ">

                            {/* left side form */}
                            <div>
                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold text">Service Name</span>
                                    </label>
                                    <input type="text" name="serviceName" defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" required />
                                </div>
                                {/* 2 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Service Price</span>
                                    </label>
                                    <input type="text" defaultValue={servicePrice} name="servicePrice" placeholder="Service Price" className="input input-bordered" required />
                                </div>


                            </div>


                            {/* right side  */}
                            <div>


                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Service Image</span>
                                    </label>
                                    <input type="text" defaultValue={serviceImage} name="serviceImage" placeholder="Image Url" className="input input-bordered" required />
                                </div>
                                {/* 2*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Service Area</span>
                                    </label>
                                    <input type="text" defaultValue={serviceArea} name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                                </div>



                            </div>



                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Service Description</span>
                            </label>

                            <textarea name="description" defaultValue={description} placeholder="Service Description" className="textarea textarea-bordered textarea-sm w-full d" required >
                            </textarea>




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
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Provider Photo</span>
                            </label>

                            <input type="text" defaultValue={providerPhoto} name="providerPhoto" placeholder="Photo Url" className="input input-bordered" required />

                        </div>



                        <div className="form-control mt-6">
                            <input type="submit" value="Update Service" className="btn text-xl text-white outline-non bg-cyan-500" />
                        </div>


                    </form>


                </div>

            </div>

        </div>
    );
};

export default EditService;