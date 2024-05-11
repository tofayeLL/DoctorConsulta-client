

const BookingDetails = () => {


    const handlePurchase = (e) => {
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
        console.log(service);

    }






    return (
        <div className="lg:mt-0 bg-cyan-400  lg:p-14 md:p-14 p-6">



            <div className="max-w-4xl mx-auto  bg-cyan-100 shadow-xl">


                <form onSubmit={handlePurchase} className="card-body" >
                    <h1 className="text-4xl font-bold text-cyan-500">Purchase Now</h1>

                    <div className="grid grid-cols-2 gap-6 ">

                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold text">Service Name</span>
                                </label>
                                <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Price</span>
                                </label>
                                <input type="text" name="servicePrice" placeholder="Service Price" className="input input-bordered" required />
                            </div>


                        </div>


                        {/* right side  */}
                        <div>


                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Image</span>
                                </label>
                                <input type="text" name="serviceImage" placeholder="Image Url" className="input input-bordered" required />
                            </div>
                            {/* 2*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Area</span>
                                </label>
                                <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                            </div>



                        </div>



                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Service Description</span>
                        </label>

                        <input type="text" name="description" placeholder="Service Description" className="input input-bordered" required />


                    </div>

                    {/* service provider info */}
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Name</span>
                        </label>

                        <input type="text" name="providerName" placeholder="Provider Name" className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Email</span>
                        </label>

                        <input type="text" name="providerEmail" placeholder="Provider Email" className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Photo</span>
                        </label>

                        <input type="text" name="providerPhoto" placeholder="Photo Url" className="input input-bordered" required />


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