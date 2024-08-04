import React, { useState } from 'react'
import logo from "../../assets/A1.png";
import { FaBars,    FaGithub,  FaLinkedin } from 'react-icons/fa6';
import {  FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


export default function Navbar() {
    const [ nav, setNav ] = useState(false)
    const handelNav = () => {
        setNav(!nav)
    }
    return <>
        <div className=" fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] px-4  text-gray-300">
            <div className="">
              <img src={logo} alt=" logo image"  style={{width:'100px'}}/>
            </div>
            {/* Menu */}
            
                <ul className=' hidden md:flex'>
                <li className='hover:text-violet-600 duration-300 '>
                    <Link to="home" smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 '>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                    </li>
                <li className='hover:text-violet-600 duration-300 '>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                    </li>
                <li className='hover:text-violet-600 duration-300 '>
                    <Link to="work" smooth={true} duration={500}>
                     Work
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 '>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                    </li>
                </ul>
          
            {/* Hamburger */}
            <div onClick={handelNav} className=" md:hidden z-10 ">
                {!nav ? <FaBars className='hover:text-violet-600 duration-300' /> : <FaTimes className='hover:text-violet-600 duration-300' />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='hover:text-violet-600 duration-300 py-6 text-4xl '>
                    <Link onClick={handelNav}  to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 py-6 text-4xl '>
                    <Link onClick={handelNav}  to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 py-6 text-4xl '>
                    <Link onClick={handelNav}  to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 py-6 text-4xl '>
                    <Link onClick={handelNav}  to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-violet-600 duration-300 py-6 text-4xl '>
                    <Link onClick={handelNav}  to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            
           
            {/* Social icons */}
            <div className=" hidden lg:flex fixed top-[35%] left-0 flex-col">
                <ul>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center  bg-blue-600 '>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/ayaa-hassan">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-black/90'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Ayaa-Hassan">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-[#6fc2b0] '>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:ayaahassan115@gmail.com">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between items-center bg-[#565f69] '>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        
                        </a>
                    </li>
                </ul>
            </div>
        </div>    
    
    </>
}
