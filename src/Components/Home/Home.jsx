import React from 'react'
import Banner from '../Banner/Banner'
import ServiceHomePage from '../ServiceHomePage/ServiceHomePage'
import AboutHomePage from '../AboutHomePage/AboutHomePage'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
    <Banner />
    <AboutHomePage />
    <ServiceHomePage />
    <Testimonial />
    <Contact />
    </>
  )
}

export default Home
