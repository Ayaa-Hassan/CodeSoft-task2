import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'



export default function Home() {
    return <>
        <div name='home' className=" bg-[#0a192f] w-full h-screen">
            {/* Container */}
            <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-violet-400'>Hi, my name is</p>

                <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Ayaa Hassan</h1>

                <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I graduated from the faculty of commerce's MIS department that related to the computer science field in addition to the commercial field, which I studied at my college (Java, Python programming language, DB, IT infrastructure, data analysis, ERP system, etc.).
                    I focused on web development core and studied at Route Academy full-stack development</p>
                <div className="">
                    <Link to="work" offset={50} smooth={true} duration={700} >
                    <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-600 hover:border-violet-600'> View Work
                        <span className=' group-hover:rotate-90 duration-300'>
                            
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    
    </>
}
