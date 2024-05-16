import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function TransmissionLine() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='metallicBarrierPage-section'>
      <div className="container">
        <div className="heading">
            <span><i class="ri-arrow-right-double-fill"></i>Transmission Line Project<i class="ri-arrow-left-double-line"></i></span>
        </div>
        <div className="main-container">
            <div className="img-parent">
                <div className="img">
                <img src={p1} alt="" />
                </div>
                <div className="img">
                <img src={p2} alt="" />
                </div>
            </div>
            <div className="product-detail">
                <p>Transmission lines are the interstate freeways for electricity, with on-ramps from diverse 
generating sources and off-ramps to customers and communities who need power. Energy use is 
increasing and significant additions to our transmission system will be required in the next 10 years.</p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>Our Integrated Resource Plan (IRP) identifies a need for more transmission lines to deliver 
electricity from new generating resources – either from new generating plants, or to provide a 
path for additional energy purchases from other entities in the region. We are involved in 
discussions at state and federal levels on the critical need to expand transmission systems in the 
region, and are in the process of studying and planning transmission expansion projects 
identified inside and outside of our IRP. This process includes very long-range planning to 
ensure our transmission system integrates well with other utility systems in the Western 
Electricity Coordinating Council (WECC).</p>
                <p>Below are links to information on transmission projects now in progress, including several that 
are part of our Energy Gateway Transmission Expansion program, announced in May 2007. 
Click to find maps, background information and important dates in the public approval process. 
</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TransmissionLine
