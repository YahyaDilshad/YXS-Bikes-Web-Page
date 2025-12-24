import React from 'react'

import Herosection from '../Components/Herosection'
import Homeabout from '../Components/Homeabout'
import Cardscomponents from '../Components/Homecardscomponents'
import Bikes from '../Components/Bikes'
import Homeproduct from '../Components/Homeproduct'
import Faqs from '../Components/Faqs'
import Subscribesection from '../Components/Subscribesection'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  

  return (
    <div className="w-full h-[100vh]  ">
    <Header/> 
    <Herosection/>     
    <Homeabout/>
    <Cardscomponents/>
    <Bikes/>
    <Homeproduct/>
    <Faqs/>
    <Subscribesection/>
    <Footer/>
    </div>

  )
}

export default Home
