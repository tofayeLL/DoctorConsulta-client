

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div>



            <div className='lg:relative md:relative '>

                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper lg:h-[85vh] md:h-[80vh] h-[60vh] ">

                    {/* slide 1 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/92Rqcbw/slide1.jpg)] bg-center bg-cover'>

                    </SwiperSlide>


                    {/* slide 2 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/cykgHyt/slide5.jpg)] bg-center bg-cover'>

                    </SwiperSlide>


                    {/* slide 3 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/XZwt15D/slide6.jpg)] bg-center bg-cover'>

                    </SwiperSlide>

                    {/* slide 4 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/yPntsQy/slide4.jpg)] bg-center bg-cover' >

                    </SwiperSlide>


                    {/* slide 5 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/gdYmK9X/slide2.jpg)] bg-center bg-cover'>

                    </SwiperSlide>



                    {/* slide 6 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/bFcjPy6/slide8.jpg)] bg-center bg-cover'>

                    </SwiperSlide>

                    {/* slide 7 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/hKgjJBr/slide3.jpg)] bg-center bg-cover'>

                    </SwiperSlide>

                    {/* slide 8 */}
                    <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/DtRpZmq/slide10.jpg)] bg-center bg-cover'>

                    </SwiperSlide>



                </Swiper>


                <div className=' lg:absolute md:absolute flex flex-col justify-center items-center lg:translate-y-[-60vh] md:translate-y-[-60vh] lg:flex md:flex hidden py-6 text-white z-10 w-full lg:px-10 px-3 '>
                    <div className='lg:space-y-4 md:space-y-3 space-y-2 text-center  '>
                        <h1 className='lg:text-5xl text-xl font-bold '>
                            <Typewriter
                                words={['What We Treat']}
                                loop={5}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </h1>

                        <p className='text-lg'>Total Mind and Body Care</p>
                        <p className='lg:w-[60%] md:w-[80%] w-full mx-auto lg:text-lg md:text-base text-sm opacity-90'>
                            We have online doctors and medical providers available to treat urgent care, preventive care, chronic care, everyday care, and mental health care</p>
                        {/*  <button className='btn hover:text-cyan-600 bg-cyan-500 outline-none text-base font-semibold text-white'><a href="#craftItem">Explore More</a></button> */}
                        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-200 rounded hover:bg-white group">


                            
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative font-semibold text-xl w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Start Visit</span>
                           



                        </button>
                    </div>

                </div>


            </div>






        </div>
    );
};

export default Banner;