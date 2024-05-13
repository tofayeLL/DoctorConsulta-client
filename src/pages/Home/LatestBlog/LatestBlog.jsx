// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import { useEffect, useState } from 'react';
import axios from 'axios';



const LatestBlog = () => {




    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // get
        axios.get('http://localhost:5000/blogs')
            .then(data => {
                // console.log(data.data);
                setBlogs(data.data);
            })
    }, [])


    console.log(blogs)



    return (
        <div className='lg:block md:block hidden'>

            <div className='text-center mb-12'>
                <h2 className="text-3xl font-bold sm:text-5xl  text-[#143566] ">Read the latest health articles</h2>
            </div>




            <div className='bg-[#e3f4fe] rounded-lg p-6 '>


                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={6}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay, FreeMode, Pagination]}
                        className="mySwiper "
                    >

                        <div>
                            {
                                blogs.map(blog => <div key={blog._id}>
                                    <SwiperSlide className='lg:p-6'>
                                        <div className='border-[1px]  border-cyan-600 rounded-lg lg:p-4   bg-white shadow-lg'>
                                            <article className="flex flex-col dark:bg-gray-50 space-y-1">
                                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.blogImage} />
                                                </a>

                                                <div className="flex flex-col flex-1 p-6 space-y-2">
                                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>

                                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"><span className='bg-cyan-300 p-1 text-gray-900'>{blog.category}</span></a>

                                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>


                                                    <p>{blog.content} <br />
                                                        <span className="hover:underline dark:text-gray-600 text-cyan-600">_____By {blog.author}</span></p>

                                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                                        <span>{blog.date}</span>
                                                        <span>{blog.views} views</span>
                                                    </div>
                                                </div>
                                            </article>

                                        </div>



                                    </SwiperSlide>
                                </div>
                                )
                            }
                        </div>

                    </Swiper>
                </>



            </div>

        </div>
    );
};

export default LatestBlog;