import React from 'react'
import './ServiceHomePage.css'
import { Link } from 'react-router-dom'
import road from './road.jpg'
import rural from './rural.jpg'
import du from './du.jpg'
import solar from './solar.jpg'
import electind from './electind.jpg'
import transformer from './transformer.jpg'
import home from './home.jpg'
import hight from './high.webp'

function ServiceHomePage() {
  return (
    <section className='services-home-section'>
            <div className="container">
                <div className="heading">
                    <span><i class="ri-arrow-right-double-fill"></i>Comprehensive Product Portfolio<i class="ri-arrow-left-double-line"></i></span>
                </div>
                <div className="service-box">
                    <div className="same-col col-4">
                        <div className="img">
                            <img src={solar} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Power Plant & Solar Plant</h2>
                            <p>For a absorptive metal noise barrier, the focus is on ..</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/power-solar'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-4">
                        <div className="img">
                            <img src={road} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Road Construction</h2>
                            <p>For a absorptive metal noise barrier, the focus is on ..</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/Road-Construction'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-2">
                        <div className="img">
                            <img src={electind} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Electrical Industrial Project</h2>
                            <p>Introducing a Barrier, a cutting-edge solution designed..</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/electrical-industrial'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={transformer} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Transmission Line Project</h2>
                            <p>A natural noise barrier refers to a physical or environmental...</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/transmission-line'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={rural} alt="" />
                        </div>
                        <div className="detail">
                            <h2>Rural Electrification And Distribution Project</h2>
                            <p>A vision barrier is a multifaceted concept encompassing both...</p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/rural-distribution'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={du} alt="" />
                        </div>
                        <div className="detail">
                            <h2>DDUGJY And Underground Project</h2>
                            <p>Concrete noise barriers are structures specifically designed... </p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/ddugjy'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={home} alt="" />
                        </div>
                        <div className="detail">
                            <h2>House Wire ring Project</h2>
                            <p>Tunnel noise barriers are specialized structures designed to... </p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/house-wire'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="same-col col-1">
                        <div className="img">
                            <img src={hight} alt="" />
                        </div>
                        <div className="detail">
                            <h2>High voltage Distribution Service</h2>
                            <p>Our Metal noise barrier with the transparent elements... </p>
                            {/* <Link className='service-btn' to={'/'}>Read More</Link> */}
                            <div className="btn-box">
                                <a href="tel: +919891001646"><i class="ri-phone-fill"></i>  Inquiry</a>
                                <Link to={'/High-voltage'} >Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ServiceHomePage
