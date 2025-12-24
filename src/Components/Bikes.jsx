import React from 'react'

const Bikes = () => {
  const text1 =
    "Introducing the Ultra Bee, the ultimate electric dirt bike for eco-conscious thrill-seekers. With cutting-edge technology, it delivers exceptional performance while minimizing environmental impact, perfect for adventurous riders."

  const text2 =
    "Discover the Ultra Bee, a top-tier powersport vehicle priced at £1500."

  return (
    <div className="w-full md:py-40 flex flex-col items-center justify-center bg-black py-10">
      {/* Heading */}
      <h1 className="md:text-4xl text-[8vw] text-white leading-tight md:leading-10 px-2 text-center font-[Orbitron]">
        Own your electric dirt bike today.
      </h1>

      <div className="w-[90%] md:w-[80%]  flex flex-col md:flex-row gap-10 mt-10">
        {/* Left Image and Specs */}
        <div className="w-full md:w-[60%]">
          <img className="w-full md:h-80  " src="/bikes.png" alt="bike" />

          <div className="md:py-10 py-5 flex flex-wrap md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="speed font-semibold text-start">
              <h2 className="uppercase text-[#888888]">Top speed</h2>
              <h1 className="uppercase text-white text-xl">56.6mph (75 km/h)</h1>
            </div>
            <div className="Maxpower font-semibold text-start">
              <h2 className="uppercase text-[#888888]">Maximum power</h2>
              <h1 className="uppercase text-white text-xl">8000 w</h1>
            </div>
            <div className="RidingMode font-semibold text-start">
              <h2 className="uppercase text-[#888888]">Riding Mode</h2>
              <h1 className="uppercase text-white text-xl">Sports + eco</h1>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[40%] flex flex-col items-start md:items-start">
          <h1 className="text-start uppercase text-[7vw] md:text-[2rem] text-white font-[Orbitron]">
            ultra bee
          </h1>

          {/* Description */}
          <div className="text-[#888888] font-semibold text-sm md:text-[17px] mt-3 text-start md:text-start">
            <p>{text1}</p>
            <p className="pt-5">{text2}</p>
          </div>

          {/* Price */}
          <h1 className=" text-start uppercase text-[6vw] md:text-2xl text-white font-[Orbitron] mt-5">
            £ 1500
          </h1>

          <div className="mt-5 w-full">
            <button className="cursor-pointer md:mt-10 bg-[#00F0FF] w-full text-black px-6 py-3 font-semibold" type="button">
              Explore Our Vehicles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bikes
