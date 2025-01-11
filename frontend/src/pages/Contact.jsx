import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center mt-20'>
    <div className="flex flex-wrap justify-between gap-10">
        {/* left side section */}
        <div className="">
        <h1 className='text-3xl font-medium'>Contact us</h1>
        <p className='my-4'>Name</p>
        <input className='border border-teal-500 h-10 w-60' type='text'/>
        <p className='my-4'>Email</p>
        <input className='border border-teal-500 h-10 w-60' type='email'/>
       </div>
       {/* right side section */}
       <div className="">
       <p className='my-4'>message</p>
       <textarea className='border border-teal-500 resize-none'  rows="5" cols="30"></textarea><br/>
       <button className='w-full bg-teal-600 text-white font-medium rounded-full mt-5 h-10 hover:bg-teal-800'>submit</button>
       </div>
    </div>
    </div>
  )
}

export default Contact