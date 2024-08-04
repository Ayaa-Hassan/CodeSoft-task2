import React from 'react'
import Html from '../../assets/html.png';
import CSS from '../../assets/css.png';
import Tailwind from '../../assets/tailwind.png';
import Bootstrap from '../../assets/bootstrap.png';
import JavaScript from '../../assets/javascript.png';
import TypeScript from '../../assets/typeScript.png';
import ReactImg from '../../assets/react.png';
import MySqlImg from '../../assets/mySql.png';
import Mongo from '../../assets/mongo.png';
import Node from '../../assets/node.png';
import Docker from "../../assets/docker.png";
import Postman from "../../assets/postman.png";
import Github from '../../assets/github.png';






export default function Skills() {
  return <>
      <div name='skills' className="w-full h-full py-16 bg-[#0a192f] text-gray-300">
          {/* container */}
          <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
              <div className="">
                  <p className='text-4xl font-bold inline border-b-4 border-violet-600 '>Skills</p>
                  <p className='py-5'>
                      // These are the technologies I've worked with
                  </p>
              </div>
              <div className=" w-full grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Html} alt=" html logo" />
                      <p className='my-4'>HTML</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={CSS} alt="css logo" />
                      <p className='my-4'>CSS</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Tailwind} alt="tailwind logo" />
                      <p className='my-4'>Tailwind</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Bootstrap} alt="bootstrap logo" />
                      <p className='my-4'>Bootstrap</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={JavaScript} alt=" js logo" />
                      <p className='my-4'>JavaScript</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={TypeScript} alt="ts logo" />
                      <p className='my-4'>TypeScript</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={ReactImg} alt="react logo" />
                      <p className='my-4'>React Js</p>
                  </div>
                 
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Mongo} alt=" mongo logo" />
                      <p className='my-4'>Mongo DB</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Node} alt="node logo" />
                      <p className='my-4'>Node Js</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Docker} alt="docker logo" />
                      <p className='my-4'>Docker</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Postman} alt="postman logo" />
                      <p className='my-4'>Postman</p>
                  </div>
                  <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                      <img className=' w-20 mx-auto' src={Github} alt="github logo" />
                      <p className='my-4'>Github</p>
                  </div>
              </div>
          </div>
          

  </div>
  
  
  </>
}
