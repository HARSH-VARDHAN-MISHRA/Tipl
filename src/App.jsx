import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import PowerPlantPage from './Components/PowerPlantPage/PowerPlantPage'
import RoadConstruction from './Components/RoadConstruction/RoadConstruction'
import ElectricalIndustrial from './Components/ElectricalIndustrial/ElectricalIndustrial'
import RuralDistribution from './Components/RuralDistribution/RuralDistribution'
import TransmissionLine from './Components/TransmissionLine/TransmissionLine'
import HouseWire from './Components/HouseWire/HouseWire'
import Highvoltage from './Components/Highvoltage/Highvoltage'
import Career from './Components/Career/Career'
import AboutPage from './Components/AboutPage/AboutPage'
import Testimonial from './Components/Testimonial/Testimonial'
import OurManagementPage from './Components/OurManagementPage/OurManagementPage'
import DDUGJY from './Components/DDUGJY/DDUGJY'
// import BuildingConstruction from './Components/BuildingConstruction/BuildingConstruction'





function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/power-solar' element={<PowerPlantPage />} />
          <Route path='/Road-Construction' element={<RoadConstruction />} />
          <Route path='/electrical-industrial' element={<ElectricalIndustrial />} />
          <Route path='/rural-distribution' element={<RuralDistribution />} />
          <Route path='/transmission-line' element={<TransmissionLine />} />
          <Route path='/house-wire' element={<HouseWire />} />
          <Route path='/High-voltage' element={<Highvoltage />} />
          <Route path='/career' element={<Career />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/management' element={<OurManagementPage />} />
          <Route path='/ddugjy' element={<DDUGJY />} />
        </Routes>
        <Footer />
        <Toaster/>
      </Router>
    </>
  )
}

export default App
