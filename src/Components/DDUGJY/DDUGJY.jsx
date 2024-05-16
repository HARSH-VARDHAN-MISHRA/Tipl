import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function DDUGJY() {
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
            <span><i class="ri-arrow-right-double-fill"></i>DDUGJY and underground project<i class="ri-arrow-left-double-line"></i></span>
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
                <p>The Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY) is a flagship scheme of the Indian government aimed at providing continuous power supply to rural India. Named after the renowned political philosopher Pandit Deendayal Upadhyaya, the scheme was launched in July 2015 by Prime Minister Narendra Modi. Its primary objective is to strengthen and augment the distribution infrastructure in rural areas, thereby ensuring round-the-clock power supply to households, agricultural consumers, and rural enterprises.</p>
                <p>The Underground Project refers to initiatives aimed at underground cabling of power lines in urban and peri-urban areas. Underground cabling involves burying power cables underground instead of overhead lines supported by poles. </p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                {/* <p>Our Integrated Resource Plan (IRP) identifies a need for more transmission lines to deliver 
electricity from new generating resources – either from new generating plants, or to provide a 
path for additional energy purchases from other entities in the region. We are involved in 
discussions at state and federal levels on the critical need to expand transmission systems in the 
region, and are in the process of studying and planning transmission expansion projects 
identified inside and outside of our IRP. This process includes very long-range planning to 
ensure our transmission system integrates well with other utility systems in the Western 
Electricity Coordinating Council (WECC).</p> */}
                {/* <p>Below are links to information on transmission projects now in progress, including several that 
are part of our Energy Gateway Transmission Expansion program, announced in May 2007. 
Click to find maps, background information and important dates in the public approval process. 
</p> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default DDUGJY
