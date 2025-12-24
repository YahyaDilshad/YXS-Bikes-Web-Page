import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCards = () => {
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "STEALTH PREDATOR",
      category: "Racing Bikes",
      desc: "An Aerodynamic Racing Bike For Speed Enthusiasts",
      price: "£ 2200",
      img: "/productimage1.png",
    },
    {
      id: 2,
      title: "STEALTH PREDATOR",
      category: "Racing Bikes",
      desc: "An Aerodynamic Racing Bike For Speed Enthusiasts",
      price: "£ 2200",
      img: "/productimage1.png",
    },
    {
      id: 3,
      title: "CRIMSON RIDER",
      category: "Racing Bikes",
      desc: "A Versatile Hybrid Bike Perfect For City Commutes And Leisure Rides",
      price: "£ 1300",
      img: "/productimage1.png",
    },
   
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // 300px move
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative py-10">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2  top-1/2 -translate-y-1/2 bg-[#00f0ff] text-black p-2 rounded-full z-8 hover:bg-[#00d6e6]"
      >
        <FaChevronLeft />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="cards-con transition flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-10"
      >
        {products.map((item) => (
          <div key={item.id} className="w-[250px] shrink-0">
            <img src={item.img} alt={item.title} className="w-full object-cover" />
            <div className="w-full text-start flex items-start justify-between mt-2">
              <h1 className="text-white font-[Orbitron] text-lg uppercase">
                {item.title}
              </h1>
              <p className=" w-30 text-center  rounded border border-[#00f0ff] text-[12px] text-[#00f0ff]">
                {item.category}
              </p>
            </div>
            <p className="text-[#858383] text-sm text-start mt-2">{item.desc}</p>
            <h2 className="text-white text-start font-[Orbitron] text-lg mt-3">{item.price}</h2>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2  -translate-y-1/2 bg-[#00f0ff] text-black p-2 rounded-full z-8 hover:bg-[#00d6e6]"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCards;
