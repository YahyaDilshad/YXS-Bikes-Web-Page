import React, { useState } from 'react'

const Subscribesection = () => {
  const [email, setemail] = useState('')

  const handler = (e) => {
    e.preventDefault()
    setemail('')
  }

  return (
    <div className="w-full py-50 flex items-center justify-center flex-col bg-black text-white">
      {/* Heading */}
      <h1 className="text-center font-[Orbitron] text-[8vw] sm:text-3xl md:text-3xl lg:text-5xl px-4">
        Subscribe To Get Our Latest Update
      </h1>

      {/* Form */}
      <form
        onSubmit={handler}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full max-w-xl px-4"
      >
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          required
          className="outline-none flex-1  min-w-0 py-3 px-4 rounded border border-gray-300 text-white"
          placeholder="Enter Your Email Here"
        />
        <button
          type="submit"
          className="py-3 px-6 font-semibold rounded bg-white text-black hover:bg-gray-200 transition">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Subscribesection
