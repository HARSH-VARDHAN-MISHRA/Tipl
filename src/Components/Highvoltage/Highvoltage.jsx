import React, { useEffect } from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'

function Highvoltage() {
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
            <span><i class="ri-arrow-right-double-fill"></i>High voltage Distribution Service<i class="ri-arrow-left-double-line"></i></span>
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
                <p>An electric power distribution system is the final stage in the delivery of electric power; it carries 
electricity from the transmission system to individual consumers. Distribution substations 
connect to the transmission system and lower the transmission voltage to medium voltage 
ranging between 2 kV and 35 kV with the use of transformers. Primary distribution lines carry 
this medium voltage power to distribution transformers located near the customer’s premises. 
Distribution transformers again lower the voltage to the utilization voltage of appliances and 
typically feed several customers through secondary distribution lines at this voltage. Commercial 
and residential customers are connected to the secondary distribution lines through service drops. 
Customers demanding a much higher high load may be connected directly at the primary 
distribution level or the sub transmission level. </p>
                {/* <strong>Solar Power Plant India- Introduction </strong> */}
                <p>In the very early days of electricity distribution (for example Thomas Edison’s Pearl Street 
Station), direct current (DC) generators were connected to loads at the same voltage. The 
generation, transmission and loads had to be of the same voltage because there was no way of 
changing DC voltage levels, other than inefficient motor-generator sets. Low DC voltages 
(around 100 volts) were used since that was a practical voltage for incandescent lamps, which 
were the primary electrical load. Low voltage also required less insulation for safe distribution 
within buildings. The loss in a cable is proportional to the square of the current, and the 
resistance of the cable. A higher transmission voltage would reduce the copper size to transmit a 
given quantity of power, but no efficient method existed to change the voltage of DC power 
circuits. To keep losses to an economically practical level the Edison DC system needed thick 
cables and local generators. Early DC generating plants needed to be within about 1.5 miles (2.4 
km) of the farthest customer to avoid excessively large and expensive conductors. </p>
                <p>The company has capabilities in construction of roads, bridges, electrification 
network including erection of power substations, institutional and residential 
buildings, and potable water and drainage lines. Ramsevak Singh Tangad Infra 
projects Private Limited takes pride in executing challenging projects that involve 
special skills, personnel, equipments and material. A dedicated and competent team 
of planners, designers and construction engineers enables it to optimize resources 
and deliver quality infrastructure to its customers with cost and time advantages 
</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Highvoltage
