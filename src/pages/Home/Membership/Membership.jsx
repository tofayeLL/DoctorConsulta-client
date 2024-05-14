import { FcCheckmark } from 'react-icons/fc';
import icon1 from '../../../assets/images/textting.png'
import icon2 from '../../../assets/images/available.png'
import icon3 from '../../../assets/images/kids.png';
import icon4 from '../../../assets/images/lab.png';
import icon5 from '../../../assets/images/mediarecord.png';



const Membership = () => {
    return (
        <div>
            <div className='border-b-4  text-center   font-bold py-8'>
                <h1 className='lg:text-5xl text-2xl'>Additional membership benefits</h1>

            </div>


            {/* All Card */}
            <div className='p-10'>

                {/* 1 */}
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10 '>


                    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                        <div>
                            <img src={icon1} alt="" />

                        </div>
                        <div className='lg:text-start md:text-start text-center'>
                            <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Free texting with your doctor</h4>
                            <p className='text-xl  '>No need to pay for a visit when you have a quick question</p>
                        </div>

                    </div>
                    <div>
                        <span><FcCheckmark className='text-5xl font-bold'></FcCheckmark></span>
                    </div>



                </div>
                {/* 2 */}
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10'>


                    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                        <div>
                            <img src={icon2} alt="" />

                        </div>
                        <div className='lg:text-start md:text-start text-center'>
                            <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Available when you need us</h4>
                            <p className='text-xl '>Same-day appointments with your doctor or on-call doctors within 15 minutes</p>
                        </div>

                    </div>
                    <div>
                        <span><FcCheckmark className='text-5xl font-bold'></FcCheckmark></span>
                    </div>



                </div>
                {/* 3 */}
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10'>


                    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                        <div>
                            <img src={icon3} alt="" />

                        </div>
                        <div className='lg:text-start md:text-start text-center'>
                            <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Kids included</h4>
                            <p className='text-xl '>Children ages 2 to 17 can see your doctor or their own doctor</p>
                        </div>

                    </div>
                    <div>
                        <span><FcCheckmark className='text-5xl font-bold'></FcCheckmark></span>
                    </div>



                </div>
                {/* 4 */}
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10'>


                    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                        <div>
                            <img src={icon4} alt="" />

                        </div>
                        <div className='lg:text-start md:text-start text-center'>
                            <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Prescriptions, lab tests, specialist referrals</h4>
                            <p className='text-xl '>Our doctors make managing your health easy, convenient, and affordable</p>
                        </div>

                    </div>
                    <div>
                        <span><FcCheckmark className='text-5xl font-bold'></FcCheckmark></span>
                    </div>



                </div>
                {/* 5*/}
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center border-b-2 py-10'>


                    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-10 '>
                        <div>
                            <img src={icon5} alt="" />

                        </div>
                        <div className='lg:text-start md:text-start text-center'>
                            <h4 className='text-2xl font-bold text-cyan-700 mb-2'>Access to medical records</h4>
                            <p className='text-xl '>Health history and visit records securely stored in one place</p>
                        </div>

                    </div>
                    <div>
                        <span><FcCheckmark className='text-5xl font-bold'></FcCheckmark></span>
                    </div>



                </div>






            </div>



        </div>
    );
};

export default Membership;