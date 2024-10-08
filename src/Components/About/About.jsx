import React from 'react'

export default function About() {
    return <>
        <div name='about' className=" w-full h-screen bg-[#0a192f] text-gray-300">
            <div className=" flex flex-col justify-center items-center w-full h-full">
                <div className=" max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className=" sm:text-right pb-8 pl-4 ">
                        <p className='text-4xl font-bold inline border-b-4 border-violet-600'>About</p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
                    <div className=" sm:text-right text-4xl font-bold">
                        <p> Hi. I'm <span className='text-violet-600'>Ayaa</span>, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className="">
                        <p> I'm a software developer with a passion for building innovative and user-friendly applications.
                            I'm always looking for ways to improve my skills and stay up-to-date with the latest technologies
                            and trends in the industry.
                            I'm passionate about building excellent software that improves the lives of those around me. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
};
