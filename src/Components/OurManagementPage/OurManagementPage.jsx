import React, { useEffect } from 'react'
import './OurManagement.css'
// import OurClient from '../OurClient/OurClient'
import m1 from './1.jpg'
import m2 from './2.jpg'
import m3 from './3.jpg'

function OurManagementPage() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <section className='ourmanagementpage-section'>
        <div className="container">
          <div className="heading">
            <span><i class="ri-arrow-right-double-fill"></i>OUR MANAGEMENT<i class="ri-arrow-left-double-line"></i></span>
          </div>
            <div className="main-container">
              <div className="same-col">
                <div className="img">
                <img src={m1} alt="" />
                </div>
                <div className="detail">
                  <span>Mr. Rovil Chaudhary</span>
                  <p>DIRECTOR & FOUNDER</p>
                </div>
              </div>
              <div className="same-col">
                <div className="img">
                <img src={m3} alt="" />
                </div>
                <div className="detail">
                  <span>Mr Devendra Singh Tangad</span>
                  <p>DIRECTOR & FOUNDER</p>
                </div>
              </div>
              <div className="same-col">
                <div className="img">
                <img src={m2} alt="" />
                </div>
                <div className="detail">
                  <span>Mr Amod Chaudhary</span>
                  <p>DIRECTOR & FOUNDER</p>
                </div>
              </div>
            </div>
            {/* <OurClient /> */}
        </div>
    </section>
  )
}

export default OurManagementPage
