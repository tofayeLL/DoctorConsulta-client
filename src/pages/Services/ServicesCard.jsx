

const ServicesCard = ({ service }) => {
    const { erviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto } = service;
    return (
        <div>



            <ul className="p-2 lg:p-4 ">
                <li className="bg-cyan-400 ">
                    <article >
                        <div rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover object-center p-4 w-full h-64  sm:h-96 lg:col-span-7 " />


                            
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                                <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                            </div>
                        </div>
                    </article>
                </li>



            </ul>
        </div>
    );
};

export default ServicesCard;