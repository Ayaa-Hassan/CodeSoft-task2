import React from 'react'

export default function Contact() {
    return <>
        <div name='contact' className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="https://getform.io/f/bpjmxorb" method="POST" className='flex flex-col max-w-[600px] w-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-violet-600 text-gray-300'>Contact</p>
                    <p className=' text-gray-300 py-4' > 
                        // Submit the form below or shoot me am email - myemail@gmail.com
                    </p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name'  name='name'/>
                <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' placeholder='Message' rows={10}></textarea>
                <button className='text-white border-2 hover:bg-violet-700 hover:border-violet-600 px-4 py-3 my-8 mx-auto flex items-center '>Let's Collaborate </button>
            </form>
    </div>
    
    
    
    
    
    </>
    
}
