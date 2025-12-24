import React, { useState }  from 'react'
import { HiMenu } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { Link } from 'react-router-dom'
const Header = () => {
     const [menuOpen, setMenuOpen] = useState(false)
  return (
     <header className="flex items-center justify-center">
         <nav className="w-[90%] mt-5 h-17 backdrop-blur-xl border border-white flex items-center justify-between fixed top-5 left-0 right-0 mx-auto z-10 px-5">
          <img className="w-[72px]" src="/image.jpg" alt="logo" />

            {/* Desktop Links (>=768px) */}
            <div className="hidden md:flex gap-6 text-white font-normal">
              <Link className="hover:text-gray-400 transition text-sm" to="/">Home</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/about">About Us</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/contact">Contact Us</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/contact">Compare Vehicles</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/login">Products</Link>
            </div>

            {/* Desktop CTA button */}
            <div className='flex gap-4'>
            <button className="hidden md:inline-block cursor-pointer bg-white text-black px-6 py-2 text-sm   font-semibold border border-white hover:bg-transparent hover:text-white transition">
              Explore Our Vehicles
            </button>
            <button className="hidden text-sm md:inline-block cursor-pointer bg-transparent text-white px-6 py-2   font-semibold border border-white hover:bg-transparent hover:text-white transition">
              View Cart
            </button>
         </div>
            {/* Mobile Menu Icon (<768px) */}
            <HiMenu
              className="text-white text-4xl cursor-pointer md:hidden"
              onClick={() => setMenuOpen(true)}
            />
          </nav>

          {/* ====== Mobile Drawer ====== */}
          <div
            className={`fixed top-0 right-0 h-screen w-full bg-black text-white z-50 transform transition-transform duration-500 ease-in-out
            ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
          >
            {/* Close icon */}
            <div className="p-10 w-full flex justify-end">
              <IoMdClose
                className="text-4xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Links */}
            <div className="w-full py-20 flex flex-col items-center justify-center gap-8">
              <Link className="hover:text-gray-400 transition text-sm" to="/">Home</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/about">About Us</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/contact">Contact Us</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/contact">Compare Vehicles</Link>
              <Link className="hover:text-gray-400 transition text-sm" to="/login">Products</Link>

            </div>
          </div>
        </header>
  )
}

export default Header