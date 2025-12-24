import React from 'react'
import ProductCards from './ProductCards'

const Homeproduct = () => {
  return (
    <div className='w-full py-40  flex flex-col items-center justify-center bg-[#131313] '>
    <h1 className="md:text-xl text-[5vw] text-white  font-[Orbitron]">
    Our Products
    </h1>
    <div className="sliderproduct w-[70%] ">
     <ProductCards/>
     <h1 className="md:text-4xl text-[5vw] mt-10 flex-wrap xs:leading-7 text-white px-2 text-center font-[Orbitron]">
        Explore our wide range of <br /> electric vehicles
    </h1>
    <button className="mt-10 md:inline-block sm-full cursor-pointer bg-white text-black px-6 py-2 font-semibold border border-white hover:bg-transparent hover:text-white transition">
      View All Vehicales
    </button>
    </div>
    </div>
  )
}

export default Homeproduct