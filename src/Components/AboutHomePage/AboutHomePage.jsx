import React from 'react'
import './AboutHomePage.css'
import bg from './about-bg.jpg'
import { Link } from 'react-router-dom'

function AboutHomePage() {
  return (
    <section className='about-home-section'>
      <div className="container">
        <div className="heading">
            {/* <span>About Us</span> */}
                <span><i class="ri-arrow-right-double-fill"></i>WE ARE TANGAD INFRA PROJECTS PVT. LTD.<i class="ri-arrow-left-double-line"></i></span>
        </div>
        <div className="about-main">
            <div className="left">
                <img src={bg} alt="" />
            </div>
            <div className="right">
                <p>Approved By Government Of India Ministry of Corporate Affairs ( Registrar Of Companies, Kanpur.  </p>
                <p>Ramsevak Singh Tangad Infra projects Private Limited is a construction company in India, with expertise in the execution and construction of infrastructure projects. Governed by a highly qualified Board of Directors. The company has strong construction capabilities and is empanelled with leading developmental organizations including National Highway Authority of India along with 4.37 crore Turnover yearly. </p>
                <Link to={'/about'} className=' py-2 px-4 bg-[#008F49] text-white rounded-md'>Read More</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHomePage
