import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 dark:text-gray-100 text-gray-500">
        <p>ABOUT <span className='text-gray-700 dark:text-gray-400 font-medium'>US</span></p>

      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img className='w-full max-w-[360px]' src={assets.school} alt="" />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm dark:text-gray-200 text-gray-600 ">
          <p>Welcome to our e-learning platform, where education meets innovation. We provide high-quality, interactive courses designed to empower learners of all ages and backgrounds. 
          </p>
          <p> Our diverse range of subjects, taught by expert instructors, ensures that you gain practical knowledge and skills for personal and professional growth. With flexible learning options and a user-friendly interface, you can learn at your own pace, anytime, anywhere. Join our community and unlock your potential today!
          </p>
          <b className='text-gray-800 dark:text-gray-400'>OUR VISION</b>
          <p>we strive to inspire curiosity and a lifelong love of learning.
              We aim to nurture critical thinkers who embrace challenges with resilience and creativity.
              We believe in fostering an inclusive environment where every student feels valued and empowered.
              Through empathy and innovation, we guide students to reach their fullest potential.
          </p>
          
        </div>
      </div>

      <div className="text-xl my-4">
        <p>WHY <span className='text-gray-700 dark:text-gray-400 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] dark:hover:bg-[#2a9df4] hover:bg-teal-600 dark:text-gray-200 text-gray-600 duration-300 transition-all cursor-pointer hover:text-white'>
         <b>Efficiency</b>
         <p>streamlined sheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] dark:hover:bg-[#2a9df4] hover:bg-teal-600 dark:text-gray-200 text-gray-600 duration-300 transition-all cursor-pointer hover:text-white'>
         <b>Convinience</b>
         <p>Access to network of trusted instructors profesional in your area </p> 
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] dark:hover:bg-[#2a9df4] hover:bg-teal-600 dark:text-gray-200 text-gray-600 duration-300 transition-all cursor-pointer hover:text-white'>
         <b>Personalization</b>
         <p>Tailored recomendations and reminders to help stay on top of your academics</p>
        </div>
      </div>
    </div>
  )
}

export default About