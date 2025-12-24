import React from 'react'

const Faqs = () => {
  return (
    <div className="w-full min-h-screen py-20 relative bg-[url(/cardbg.jpg)] bg-cover bg-left flex flex-col items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000bd] to-[#12939cf6]"></div>

      {/* Title */}
      <h1 className="z-10 text-white md:block hidden text-[8vw] sm:text-[6vw] md:text-4xl font-bold text-center px-4">
        FAQ's
      </h1>
      <h1 className="z-8 mt-12 md:hidden text-white text-[7vw] sm:text-[6vw] md:text-4xl text-center font-[Orbitron] px-4">
        Have any doubt ? <br /> or Question ?
      </h1>
      {/* FAQ Items */}
      <div className="z-8 flex flex-col gap-6 w-[90%] sm:w-[85%] md:w-[70%] mt-10">
        <div className="bg-[#060606] px-5 py-6 border border-white rounded-lg">
          <h1 className="text-lg sm:text-xl text-white font-semibold">
            Where Can I buy a Vehicle from YSX ?
          </h1>
          <p className="text-sm sm:text-base text-[#888888] font-medium mt-3 leading-relaxed">
            You can pre-order or purchase your preferred electric dirt bike by booking an appointment with our team.
            Collections are available from Sheffield, and we also deliver across the UK and Europe.
          </p>
        </div>

        <div className="bg-[#060606] px-5 py-6 border border-white rounded-lg">
          <h1 className="text-lg sm:text-xl text-white font-semibold">
            What is the starting price of electric dirt bikes at YSX ?
          </h1>
          <p className="text-sm sm:text-base text-[#888888] font-medium mt-3 leading-relaxed">
            You can pre-order or purchase your preferred electric dirt bike by booking an appointment with our team.
            Collections are available from Sheffield, and we also deliver across the UK and Europe.
          </p>
        </div>

        <div className="bg-[#060606] px-5 py-6 border border-white rounded-lg">
          <h1 className="text-lg sm:text-xl text-white font-semibold">
            Do the bikes sold by YSX come with warranty and after-sales service ?
          </h1>
          <p className="text-sm sm:text-base text-[#888888] font-medium mt-3 leading-relaxed">
            You can pre-order or purchase your preferred electric dirt bike by booking an appointment with our team.
            Collections are available from Sheffield, and we also deliver across the UK and Europe.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <h1 className="z-10 mt-12 md:block hidden text-white text-[10vw] sm:text-[6vw] md:text-4xl text-center font-[Orbitron] px-4">
        Have any doubt ? <br /> or Question ?
      </h1>

      <button
        className="z-10 md:block hidden mt-6 bg-transparent text-white border border-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition"
        type="button"
      >
        Contact Us
      </button>
    </div>
  )
}

export default Faqs
