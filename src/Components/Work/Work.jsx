import React from 'react'
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work4 from '../../assets/work4.png';

export default function Work() {
    return <>
        <div id='work' name='work' className="w-full bg-[#0a192f] md:h-screen py-16 text-gray-300">
            <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <div className=" pb-8 ">
                    <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-violet-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                  {/* container */}
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4  '>
                    {/* grid item */}
                    <div style={{ backgroundImage: `url(${work1})` }}
                        className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        
                        {/* Hover  */}
                        <div className=' opacity-0 group-hover:opacity-100'>
                            <span className=' text-2xl font-bold text-white tracking-wider'>
                                Portfolio Website
                            </span>
                            <div className=' pt-8 text-center'>
                                <a href="https://tangerine-tapioca-d0bf7e.netlify.app">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Ayaa-Hassan/Portfolio-TailwindCss-React">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${work2})` }}
                        className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className=' opacity-0 group-hover:opacity-100'>
                            <span className=' text-2xl font-bold text-white tracking-wider'>
                                Travel Website
                            </span>
                            <div className=' pt-8 text-center'>
                                <a href="https://react-app-phi-umber.vercel.app/">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Ayaa-Hassan/reacte-tailwind-app">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> 
                   
                    <div style={{ backgroundImage: `url(${work4})` }}
                        className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className=' opacity-0 group-hover:opacity-100'>
                            <span className=' text-2xl font-bold text-white tracking-wider'>
                                Login Smart Website
                            </span>
                            <div className=' pt-8 text-center'>
                                <a href="https://login-smart.vercel.app/">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Ayaa-Hassan/Login_Smart">
                                    <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
    </>
}
