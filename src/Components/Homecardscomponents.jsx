import React from 'react'

const Cardscomponents = () => {
  return (
    <div className="w-full py-20 relative bg-[url(/cardbg.jpg)] flex items-center justify-start flex-col bg-cover bg-left">
          <div className="overlay  absolute top-0 w-full h-full  bg-gradient-to-t from-[#0000002f] to-[#000]"></div>
      <h1 className="md:text-4xl z-1 text-[8vw]   text-white leading-tight md:leading-10 px-2 text-center font-[Orbitron]">
        We are dedicated to provide <br /> best service
      </h1>

      {/* Card Container */}
      <div className="card-container flex flex-wrap gap-5 mt-5 w-[90%] md:w-[70%] justify-center">
        
        {/* Card 1 */}
        <div className="madel w-full ralative sm:w-[45%] md:w-[30%] hover:scale-104 transition-all ease-in-out duration-300 mt-5 border border-[#00eeff70] flex items-center justify-center flex-col p-5 backdrop-blur-xl rounded-xl">
          <img className="w-[50%]" src="/madel.png" alt="logo" />
          <h1 className="text-lg font-semibold text-white px-2 font-[Orbitron]">
            Popular Brand
          </h1>
          <p className="text-[#858383] text-center mt-2">
            Trusted by riders worldwide, known for strength, durability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="like w-full sm:w-[45%] md:w-[30%]  hover:scale-104 transition-all ease-in-out duration-300 mt-5 border border-[#00eeff70] flex items-center justify-center flex-col p-5 backdrop-blur-xl rounded-xl">
          <img className="w-[55%]" src="/like.png" alt="logo" />
          <h1 className="text-lg font-semibold text-white  font-[Orbitron]">
            Best Quality Vehicles
          </h1>
          <p className="text-[#858383] text-center mt-2">
            We deliver only premium electric dirt bikes, jets and powersports machines.
          </p>
        </div>

        {/* Card 3 */}
        <div className="madel w-full hover:scale-104 transition-all ease-in-out duration-300  sm:w-[45%] md:w-[30%] mt-5 border border-[#00eeff70] flex items-center justify-center flex-col p-5 backdrop-blur-xl rounded-xl">
          <img className="w-[50%]" src="/chart.png" alt="logo" />
          <h1 className="text-lg font-semibold text-white px-2 font-[Orbitron]">
            Reasonable Price
          </h1>
          <p className="text-[#858383] text-center mt-2">
            High performance vehicles offered at truly affordable prices.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Cardscomponents
