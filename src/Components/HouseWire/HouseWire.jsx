import React, { useEffect } from 'react'
import p1 from './p1.png'
import p2 from './p2.webp'

function HouseWire() {
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
            <span><i class="ri-arrow-right-double-fill"></i>House Wire ring Project<i class="ri-arrow-left-double-line"></i></span>
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
                <p>Ram Sevak Singh Tangad Infra projects Private Limited offer a first-class range of housing 
cables that are made in our manufacturing facilities by employing the latest technological 
advancements. These can be provided in various colors, dimensions and sizes or as pert the 
clients’ specifications. These are used for smaller size motorized tools, domestic electronic 
appliances, instruments of various meters and motorized lighting installations with rated 
specified voltage. These are available at industry-leading prices and have a long services life. 
Ram Sevak Singh Tangad Infra projects Private Limited introduces domestic wires with fire 
resistant properties. Specially formulated insulation, with a high oxygen and temperature index, 
enables the cable to withstand overloads preventing electric mishaps. So, give yourself the 
promise of security and supreme quality. </p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>Get SD Cables and safeguard your home, for life. Flame Retardant PVC insulated Single Core 
Unsheathed Copper Cables (Up to 1100Vdlts AC) Conductor: The conductors, drawn from 
bright electrolytic grade copper are annealed and bunched together. Insulation: The bunched 
conductors are insulated with specially formulated FR PVC compound with a high insulation 
resistance value. The insulation process is carried out on modern high speed extrusion lines, 
which ensures high accuracy and consistency in performance. Flame retardant properties enable 
the cable to withstand overloads. The insulation is resistant to boiling water, steam and vapors. 
This prevents ageing and cracking in kitchens, bathrooms, damp walls and chemical industries. 
Packing: 90 Meters (approx. 100 yards) pack in protective cartons</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HouseWire
