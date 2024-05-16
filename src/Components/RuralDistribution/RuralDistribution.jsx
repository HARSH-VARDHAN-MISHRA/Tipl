import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function RuralDistribution() {
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
            <span><i class="ri-arrow-right-double-fill"></i>Rural Electrification And Distribution  Project<i class="ri-arrow-left-double-line"></i></span>
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
                <p>Rural electrification is the process of bringing electrical power to rural and remote areas. Electricity is used not only for lighting and household purposes, but it also allows for mechanization of many farming operations, such as threshing, milking, and hoisting grain for storage. In areas facing labor shortages, this allows for greater productivity at reduced cost. One famous program was the New Deal’s Rural Electrification Administration in the United States, which pioneered many of the schemes still practiced in other countries. </p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>In impoverished and undeveloped areas, small amounts of electricity can free large amounts of human time and labor. In the poorest areas, people carry water and fuel by hand, their food storage may be limited, and their activity is limited to daylight hours.</p>
                <p>Adding electric-powered wells for clean water can prevent many water-borne diseases, e.g. dysentery, by reducing or eliminating direct contact between people (hands) and the water supply. Refrigerators increase the length of time that food can be stored, potentially reducing hunger, while evening lighting can lengthen a community’s daylight hours allowing more time for productivity.</p>
                <p>One of the least expensive, most reliable, and best proven electricity distribution systems for rural electrification is single wire earth return. This system is widely used in countries such as Australia with very low population densities. There are some geographical requirements necessary for its use.</p>
                <p>Since modern power distribution networks can cheaply include optic fibres in the centre of electricity transfer wires, telephone and internet service may become available with rural electrification.</p>
                <p>Locally generated renewable energy is an alternative technology, particularly compared to electrification with diesel generators. In some countries (particularly Bangladesh and India) hundreds of thousands of Solar Home Systems have been installed in recent years. The deployment of these systems is coupled with microfinance schemes, such as Grameen Shakti. Most of these systems provide electricity for lighting and some small appliances (radio, TV). Mini-grids (central generation and village wide distribution network) can be a more potent alternative to energy home systems since they can provide capacity for the productive use of electricity (small businesses). Hybrid mini-grids (renewables combined with diesel generators) are a widely acknowledged technology for rural electrification in developing countries.</p>
                
                {/* <p>For Any Inquiry Please <a target='_blank' href="https://api.whatsapp.com/send?phone=919813513375">Click Here</a></p> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default RuralDistribution
