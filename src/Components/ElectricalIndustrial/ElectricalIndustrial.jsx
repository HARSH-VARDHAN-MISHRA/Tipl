import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function ElectricalIndustrial() {
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
            <span><i class="ri-arrow-right-double-fill"></i>Electrical Industrial Project<i class="ri-arrow-left-double-line"></i></span>
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
                <p>At Ram Sevak Singh Tangad Infra projects Private Limited, we offer a comprehensive range of technical and economic expertise in the Electrical Projects field. Our Electrical Project works consists of Consulting, Design, Tendering, Execution, Testing and Commissioning.</p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>Based on the customer specific requirements, we provide the Consulting Solutions to whole industrial needs. We offer Design Solutions with the help of well-equipped CAD software lab. We procure proper engineering materials that are required for the execution of projects. The execution of projects will be done by our well-experienced and qualified engineering team.</p>
                <p>We also provide the Pre-project activities such as Site Assessment, Preliminary Planning, Evaluation of Technologies, System Studies and Feasibility & Detailed Project reports.</p>
                <div className=' flex flex-col gap-1'>
                    <strong>Our Electrical Project Services includes:</strong>
                    <ul>
                        <li>•	HT & LT Installation </li>
                        <li>•	Internal & External Lighting</li>
                        <li>•	Cable Trays and Cables </li>
                        <li>•	Data & Voice System </li>
                        <li>•	Public Addressing System </li>
                        <li>•	LT Panel Manufacturing </li>
                    </ul>
                    <p>Besides the above, we also undertake electrical project services such as preparation of shop drawings for proper execution, getting approval from the necessary government  department, preparation of AS Built Drawing to clients, testing and commissioning of the installed equipments. </p>
                </div>
                <div>
                    <strong>Key Electrical Projects by Halogens</strong>
                    <ul>
                        <li>•	Tuscany Foods – Coimbatore, Entire Project (DG, Piping, Electricals, Water Treatment Plant) </li>
                        <li>•	Wabco – TVS, Chennai – Engineering & Fabrications </li>
                        <li>•	Shakthi Knitting – Tiruppur (Electrical & Piping Contract)</li>
                        <li>•	Proteck Circuits – Chennai (Electrical & Piping Contract) </li>
                        <li>•	Telesystems India Pvt. Ltd., – Chennai </li>
                        <li>•	Altechno Coatings – Coimbatore (Electrical Contract, Pipeline and Engineering Fabrications) </li>
                        <li>•	Shakthi Knitting – Tiruppur (Electrical & Piping Contract)</li>
                        <li>•	Kovai Public School-Coimbatore </li>
                    </ul>
                </div>
                {/* <p>Explore our other products Rooftop solar-easy to install in the roof top by saving area, UPS- very simple cost effective on SUPS systems work with regular grid connected electricity works with available energy radiation charge the batteries using panels. No grid electrical supply for battery charging. </p> */}
                {/* <p>For Any Inquiry Please <a target='_blank' href="https://api.whatsapp.com/send?phone=919813513375">Click Here</a></p> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default ElectricalIndustrial
