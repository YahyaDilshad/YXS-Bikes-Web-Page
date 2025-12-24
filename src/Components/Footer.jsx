import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full py-16 px-6 border-t border-zinc-900 bg-black text-white">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col  gap-10 md:flex-nowrap lg:gap-20 justify-between text-center md:justify-start">

        {/* Logo + Tagline + Social */}
        <div className="w-full  sm:w-[250px] flex flex-col items-center">
          <img className="w-[72px]" src="/image.jpg" alt="logo" />
          <h1 className="text-sm md:text-lg text-[#888888] mt-3">
            The Future of Power Sports Starts Here
          </h1>
          <div className="flex gap-3 mt-5">
            <Link to="/">
              <FaLinkedinIn className="rounded-full bg-[#00f0ff] w-9 h-9 p-2 text-black hover:scale-110 transition" />
            </Link>
            <Link to="/">
              <FaLinkedinIn className="rounded-full bg-[#00f0ff] w-9 h-9 p-2 text-black hover:scale-110 transition" />
            </Link>
            <Link to="/">
              <FaLinkedinIn className="rounded-full bg-[#00f0ff] w-9 h-9 p-2 text-black hover:scale-110 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg md:text-xl text-[#00f0ff]">Quick Links</h1>
          <div className="flex flex-col mt-4 space-y-2">
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Home</Link>
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Our Story</Link>
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Products</Link>
          </div>
        </div>

        {/* Customers */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg md:text-xl text-[#00f0ff]">For Customers</h1>
          <div className="flex flex-col mt-4 space-y-2">
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Contact Us</Link>
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Privacy Policy</Link>
            <Link className="font-semibold text-[#888888] hover:underline" to="/">Terms & Conditions</Link>
          </div>
        </div>

        {/* Inquiries */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg md:text-xl text-[#00f0ff]">Inquiries</h1>
          <div className="flex flex-col mt-4 space-y-2">
            <h3 className="font-semibold text-[#888888]">+44 7799 911177</h3>
            <Link
              className="font-semibold text-[#888888] hover:underline"
              to="mailto:info@ysxgmail.com"
            >
              info@ysxgmail.com
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="w-full sm:w-auto">
          <Link to="/">
            <img className="w-full sm:w-60 sm:h-40 object-cover rounded-lg" src="/map.png" alt="map" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
