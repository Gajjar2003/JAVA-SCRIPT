import React from 'react'
import person from '../assets/IRNH7652.JPG'


function Hero() {
  return (
    <div>
      <div id="hero" >
       <div className="bg-[url('https://in.pinterest.com/pin/14777505023428500/')]  bg-no-repeat bg-cover">
  
<div className="grid p-20 grid-cols-2"> 

        <div className="col">
                <h1 className='text-5xl font-extrabold text-blue-600'>Jenil Gajjar</h1>
                <h2 className='text-2xl my-5'>Full Stack Developer</h2>
                <p className='text-xl my-5'>My technical skills include HTML, CSS, JavaScript, React.js, Java, Spring Boot, MySQL, MongoDB, Bootstrap, and Tailwind CSS. I enjoy learning new technologies and continuously improving my development skills by building real-world projects.

I am a quick learner, a good team player, and always eager to solve challenging problems. My goal is to start my career as a Full Stack Developer where I can contribute to meaningful projects while growing professionally and expanding my technical expertise.</p>
                <button className='border border-blue-600 px-5 py-3 text-blue-600 rounded hover:bg-blue-500 hover:text-white'>View More</button>
        </div>
        <div className="mx-auto ">
             <img src={person} alt="Person"className="w-100 h-100 rounded-full object-cover"/>       
 </div>
           
      </div>

     
      
    </div>
    <div className="skill p-20">
  <h2 className="text-4xl font-bold text-blue-600 mb-6">
    My Technical Skills
  </h2>

  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Programming Languages
    </h3>
    <ul className="flex flex-wrap gap-4">
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">HTML</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">CSS</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">JavaScript</li>
    <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">C</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">C++</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">Python</li>
    </ul>
  </div>

 
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Libraries & Frameworks
    </h3>
    <ul className="flex flex-wrap gap-4">
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">React.js</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">Spring Boot</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">Bootstrap</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">Tailwind CSS</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">Django</li>


    </ul>
  </div>

 
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Databases
    </h3>
    <ul className="flex flex-wrap gap-4">
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">MySQL</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">MongoDB</li>
      <li className="px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-500 hover:text-white">PostgreSQL</li>
    
    </ul>
  </div>
</div>
     </div>
    </div>
  )
}

export default Hero
