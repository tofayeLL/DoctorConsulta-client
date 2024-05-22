

const Faq = () => {
    return (
        <div>


            <section className="" >
                <div className="container flex flex-col justify-center px-4  mx-auto md:p-8 ">
                    <div className="text-center lg:mb-6 md:mb-6 mb-4">
                        <h2 className="text-2xl font-bold sm:text-5xl   ">Frequently Asked Questions</h2>
                    </div>


                    <div className="space-y-4 bg-base-100 rounded-xl shadow-md p-6  ">

                        <details className="w-full border  border-cyan-700   rounded-lg">

                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">Can I use my health insurance?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  opacity-90   lg:text-lg md:text-base text-sm  ">Absolutely, we accept most major health insurance plans. For specifics about your coverage, please contact our team. We're here to assist you with any questions you may have regarding insurance and payment options </p>

                        </details>

                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">Why do you charge a membership fee and a fee for each doctor visit?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >Charging a membership fee helps us keep doctor-visit costs down, similar to a big box store where you pay for a membership in order to get lower prices on groceries and household goods. </p>
                        </details>

                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">What do you mean by "primary care"?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >Primary care refers to accessible, comprehensive, person-focused healthcare. It is based on a long-term relationship with a primary care provider who understands the full scope of the patient's health situation and can coordinate specialized care when needed. </p>
                        </details>
                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">What credentials do DoctorConsulta doctors have?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >Our doctors hold valid medical licenses and undergo rigorous training in their respective fields. They are experienced professionals committed to providing high-quality care to our patients </p>
                        </details>
                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">Does DoctorConsulta give doctors notes?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >Yes, our doctors can provide medical notes upon request, detailing your visit and any necessary information for your records or employer </p>
                        </details>
                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">Are there any medications that DoctorConsulta  doctors cannot prescribe?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >DoctorConsulta doctors adhere to medical guidelines and regulations, ensuring safe prescribing practices. Certain controlled substances may require in-person consultations or specialized prescriptions </p>
                        </details>
                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">Why do I need a primary care provider (PCP)?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >Numerous studies show that having a primary care doctor decreases hospitalization and emergency room visits. It's also linked to higher birth rates, life expectancy, and overall satisfaction with the U.S. healthcare system. Even if you're healthy, having a primary care doctor helps prevent serious illness, which is more effective and less expensive than treatment. If you struggle with chronic issues such as diabetes, hypertension, or asthma, having a primary care doctor could be the difference between life and death.</p>
                        </details>
                        <details className="w-full border  border-cyan-700  rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none   lg:text-2xl md:text-xl text-base font-semibold">How is DoctorConsulta different from other telemedicine providers?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90   lg:text-lg md:text-base text-sm" >DoctorConsulta stands out through our commitment to personalized care plans tailored to each patient's needs. Our extensive network includes specialists across various fields, ensuring comprehensive healthcare solutions. Additionally, we prioritize seamless integration with existing healthcare providers, facilitating continuity of care and enhancing the patient experience</p>
                        </details>



                    </div>
                </div>
            </section>




        </div>
    );
};

export default Faq;