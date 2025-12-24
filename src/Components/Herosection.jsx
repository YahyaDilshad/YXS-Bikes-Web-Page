import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Herosection = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const el = logosRef.current;

    // Infinite marquee animation
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: "-50%", // shift left half the width
        duration: 12,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="relative w-full h-[85%] bg-[url('/homebg.jpg')] bg-center bg-cover">
      {/* ====== Hero Section ====== */}
      <div className="heading h-full text-white flex flex-col items-center justify-center">
        <h3 className="text-center py-2">
          The Future Of Power Sports Starts Here
        </h3>
        <h1 className="md:text-5xl text-[10vw] leading-12 flex-wrap md:leading-12 font-bold px-2 text-center font-[Orbitron]">
          Dart Bikes, Jets & <br /> More - All Electrics
        </h1>
        <p className="text-center text-[#D9D9D9] px-4 text-sm md:text-xl py-2">
          YSX brings you high performance electric vehicles for every terrain
          <br /> dirt, road, and water
        </p>

        <div className="buttonsection mt-7  flex gap-3 w-full flex-wrap px-3 justify-center">
          <button
            className="cursor-pointer w-full bg-[#00F0FF] md:w-auto text-black px-6 py-3  font-semibold"
            type="button"
          >
            Explore Our Vehicles
          </button>
          <button
            className="cursor-pointer bg-transparent w-full  md:w-auto text-white border px-9 py-3 font-semibold"
            type="button"
          >
            Business Inquiries
          </button>
        </div>
      </div>

      {/* ====== Brand Logos Section ====== */}
      <div className="absolute bottom-0 text-[#D9D9D9] w-full">
        <p className="text-center py-2">Get all Trusted Brand Here</p>
      </div>

      <div className="brands-logo-container md:w-[79%] flex items-center m-auto  bg-transparent h-40 overflow-hidden">
        <div
          ref={logosRef}
          className="logos flex items-center justify-center gap-20 whitespace-nowrap"
        >
          {Array(2) // duplicate for smooth infinite loop
            .fill([
              "/Brand1 (1).jpg",
              "/Brand1 (2).jpg",
              "/Brand1 (1).jpg",
              "/Brand1 (2).jpg",
              "/Brand1 (1).jpg",
              "/Brand1 (2).jpg",
              "/Brand1 (1).jpg",
              "/Brand1 (2).jpg",
              "/Brand1 (1).jpg",
              "/Brand1 (2).jpg",
            ])
            .flat()
            .map((src, i) => (
              <img
                key={i}
                className="w-[72px] object-contain"
                src={src}
                alt={`logo-${i}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
