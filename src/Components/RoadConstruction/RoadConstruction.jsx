import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function RoadConstruction() {
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
            <span><i class="ri-arrow-right-double-fill"></i>Road Construction<i class="ri-arrow-left-double-line"></i></span>
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
                <p>Whether you are an owner, contractor or investor, you need to deal with a range of requirements during every phase of your construction project. Our project management services provide you with comprehensive supervision, inspection and commissioning services for all types of projects – no matter the size or location.</p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>As a world leader in project management, we offer you extensive experience in all aspects of construction. As a result, we can help you reduce technical risks, prevent construction errors, control budgets and effectively keep your construction project within the planned schedule. Plus, we can help you meet all applicable requirements, whether they are regulatory, voluntary or client based.</p>
                <p>With our unique global reach, we provide public institutions, private investors, real estate owners, insurers and construction companies with trusted project management all over the world.</p>
                <p>To discuss how our project management services can enable you to comply with all relevant regulations and standards, contact us today.</p>
                {/* <p>Explore our other products Rooftop solar-easy to install in the roof top by saving area, UPS- very simple cost effective on SUPS systems work with regular grid connected electricity works with available energy radiation charge the batteries using panels. No grid electrical supply for battery charging. </p> */}
                {/* <p>For Any Inquiry Please <a target='_blank' href="https://api.whatsapp.com/send?phone=919813513375">Click Here</a></p> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default RoadConstruction
