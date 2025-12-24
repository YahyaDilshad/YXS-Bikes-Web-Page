import React from 'react'

const Homeabout = () => {
  return (
    <div className='w-full md:h-[130%]  px-4 min-h-[120%]    bg-black flex-col flex items-center justify-center text-center'>
        <h3 className=' md:text-[#888888] text-white text-xl'>Our Mission</h3>
        <h1 className=" block md:w-[68%] min-w-[100%]  p-3  md:text-5xl text-[7vw] text-[#888888]  flex-wrap md:leading-16 px-2 text-center font-[Orbitron]">
            YSX is on a mission <span className='text-white'>to become the leading dealership</span> in premium powersports, starting with electric Powersports built for <span className='text-white'>speed, style,</span> and sustainability.
        </h1>
       <button className="cursor-pointer hover:bg-white hover:text-black transition-all ease-in duration-300 uppercase mt-10 md:w-fit w-full bg-tranparent text-white border-1 md:px-9 py-3" type="button">
            Know more about us
       </button>
    </div>

  )
}

export default Homeabout