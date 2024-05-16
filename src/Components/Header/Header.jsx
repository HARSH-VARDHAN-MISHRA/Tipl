import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

function Header() {

    const [isActiveAbout, setIsActiceAbout] = useState(false)
    const [isActiveService, setIsActiceService] = useState(false)
    const [isActiveCareer, setIsActicecareer] = useState(false)
    const [isActiveclient, setIsActiceclient] = useState(false)
    const [isActiveNoise, setIsActiveNoise] = useState(false)
    const [isActiveMonoAbsorptive, setIsActiveMonoAbsorptive] = useState(false)
    const [isActiveBiAbsorptive, setIsActiveBiAbsorptive] = useState(false)
    const [isActivepolycarbonate, setIsActivepolycarbonate] = useState(false)
    const [isActiveWind, setIsActiveWind] = useState(false)
    const [isActiveSafety, setIsActiveSafety] = useState(false)
    const [isActiveReflective, setIsActiveReflective] = useState(false)
    const [isActiveRoofing, setIsActiveRoofing] = useState(false)
    const [isActiveRoad, setIsActiveRoad] = useState(false)
    const [isActiveMenuDropdown, setIsActiveMenuDropDown] = useState(false)

    const handleActiveNoise = () => {
        setIsActiveNoise(!isActiveNoise)
    }

    const handleDeActiveNoise = () => {
        setIsActiveNoise(false)
    }

    const handleActiveBiAbsorptive = () => {
        setIsActiveBiAbsorptive(!isActiveBiAbsorptive)
    }

    const handleDeActiveBiAbsorptive = () => {
        setIsActiveBiAbsorptive(false)
    }

    const handleActivePolycarbonate = () => {
        setIsActivepolycarbonate(!isActivepolycarbonate)
    }

    const handleDeActivepolycarbonate = () => {
        setIsActivepolycarbonate(false)
    }

    const handleActiveMonoAbsorptive = () => {
        setIsActiveMonoAbsorptive(!isActiveMonoAbsorptive)
    }

    const handleDeActiveMonoAbsorptive = () => {
        setIsActiveMonoAbsorptive(false)
    }

    const handleActiveWind = () => {
        setIsActiveWind(!isActiveWind)
    }

    const handleDeActiveWind = () => {
        setIsActiveWind(false)
    }

    const handleActiveSafety = () => {
        setIsActiveSafety(!isActiveSafety)
    }

    const handleDeActiveSafety = () => {
        setIsActiveSafety(false)
    }

    const handleActiveReflective = () => {
        setIsActiveReflective(!isActiveReflective)
    }

    const handleDeActiveReflective = () => {
        setIsActiveReflective(false)
    }

    const handleActiveRoofing = () => {
        setIsActiveRoofing(!isActiveRoofing)
    }

    const handleDeActiveRoofing = () => {
        setIsActiveRoofing(false)
    }

    const handleActiveRoad = () => {
        setIsActiveRoad(!isActiveRoad)
    }

    const handleDeActiveRoad = () => {
        setIsActiveRoad(false)
    }

    const handleActiveAbout = () => {
        setIsActiceAbout(!isActiveAbout)
    }

    const handleDeActiveAbout = () => {
        setIsActiceAbout(false)
    }

    const handleActiveService = () => {
        setIsActiceService(!isActiveService)
    }

    const handleDeActiveService = () => {
        setIsActiceService(false)
    }

    const handleActiveCareer = () => {
        setIsActicecareer(!isActiveCareer)
    }

    const handleDeActiveCareer = () => {
        setIsActicecareer(false)
    }

    const handleActiveClient = () => {
        setIsActiceclient(!isActiveclient)
    }

    const handleDeActiveClient = () => {
        setIsActiceclient(false)
    }

    const handleActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(!isActiveMenuDropdown)
    }

    const handleDeActiveMenuDropDown = () => {
        setIsActiveMenuDropDown(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <Link onClick={handleDeActiveMenuDropDown} to={'/'} className="logo flex items-center content-center">
                    {/* <img src={logo} alt="logo" /> */}
                    <h1 className=' text-4xl font-bold'>LOGO</h1>
                </Link>
                <nav>
                    <ul className={`main-ul ${isActiveMenuDropdown ? 'mainmenudropdown' : ''}`}>
                        <li>
                            <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/'}>Home</Link>
                        </li>
                        <li onMouseEnter={handleActiveAbout} onMouseLeave={handleDeActiveAbout} className='about-pointer'>
                            <Link className='for-white' >About Us</Link>
                            <ul className={`about-hover ${isActiveAbout ? 'active-about-hover' : ''}`}>
                                {/* <Link onClick={handleDeActiveMenuDropDown} to={'/credentials'}>Certificates</Link> */}
                                <Link onClick={handleDeActiveMenuDropDown} to={'/management'}>Our Management</Link>
                                {/* <Link onClick={handleDeActiveMenuDropDown} to={'/infrastructure'}>Our Infrastructure</Link> */}
                                <Link onClick={handleDeActiveMenuDropDown} to={'/testimonial'}>Testimonial</Link>
                            </ul>
                        </li>
                        <li onMouseEnter={handleActiveService} onMouseLeave={handleDeActiveService} className='services-pointer'>
                            <Link className='for-white'>Products</Link>
                            <ul className={`services-hover ${isActiveService ? 'active-service-hover' : ''}`}>

                                {/* <ul onMouseEnter={handleActiveNoise} onMouseLeave={handleDeActiveNoise}>
                                    <Link className='noise-pointer services-a-same' >Substations</Link>
                                    <ul className={`noise-hover ${isActiveNoise ? 'active-noise-hover' : ''}`} >
                                        <ul onMouseEnter={handleActiveMonoAbsorptive} onMouseLeave={handleDeActiveMonoAbsorptive}>
                                            <Link onClick={handleDeActiveMenuDropDown} to={'/Mono-Absorptive'} className='for-ul-height mono-absorptive-pointer' >Mono Absorptive Barrier</Link>
                                        </ul>
                                        <ul onMouseEnter={handleActiveBiAbsorptive} onMouseLeave={handleDeActiveBiAbsorptive}>
                                            <Link onClick={handleDeActiveMenuDropDown} className='for-ul-height bi-absorptive-pointer' to={'Bi-Absorptive'}>BI-Absorptive Noise Barrier</Link>
                                        </ul>
                                    </ul>
                                </ul> */}
                                {/* <ul onMouseEnter={handleActiveReflective} onMouseLeave={handleDeActiveReflective}>
                                    <Link className='services-a-same for-ul-height reflective-pointer'>Power Plant & Solar Plant</Link>
                                    <ul className={`reflective-hover ${isActiveReflective ? 'active-reflective-hover' : ''}`}>
                                        <ul onMouseEnter={handleActivePolycarbonate} onMouseLeave={handleDeActivepolycarbonate}>
                                            <Link onClick={handleDeActiveMenuDropDown} className='for-ul-height polycarbonate-pointer' to={'/Polycarbonate'}>Polycarbonate Noise Barrier</Link>
                                        </ul>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/PVC-Noise'}>PVC Type Noise Barrier</Link>
                                    </ul>
                                </ul> */}

                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/power-solar'}>Power Plant & Solar Plant</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/Road-Construction'}>Road Construction</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/electrical-industrial'}>Electrical Industrial Project </Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/transmission-line'}>Transmission Line Project</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/rural-distribution'}>Rural Electrification And Distribution Project</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/ddugjy'}>DDUGJY And Underground Project</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/house-wire'}>House Wire ring Project</Link>
                                <Link onClick={handleDeActiveMenuDropDown} className='services-a-same' to={'/High-voltage'}>High voltage Distribution Service</Link>

                                {/* <ul onMouseEnter={handleActiveSafety} onMouseLeave={handleDeActiveSafety}>
                                    <Link className='services-a-same for-ul-height safety-pointer'>Rural Electrification And Distribution Project</Link>
                                    <ul className={`safety-hover ${isActiveSafety ? 'active-safety-hover' : ''}`}>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/wire-rope'}>Wire-rope Barrier</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/delineator-tubes'}>Delineator Tubes</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/a-frame'}>A-Frame Barrier</Link>
                                    </ul>
                                </ul> */}

                                {/* <ul onMouseEnter={handleActiveWind} onMouseLeave={handleDeActiveWind}>
                                    <Link className='services-a-same for-ul-height wind-pointer'>RAPDRP Project</Link>
                                    <ul className={`wind-hover ${isActiveWind ? 'active-wind-hover' : ''}`}>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/pvc-wind'}>PVC Wind Break</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/metal-Wind'}>Metal Wind Break Panel</Link>
                                    </ul>
                                </ul> */}


                                {/* <ul onMouseEnter={handleActiveRoofing} onMouseLeave={handleDeActiveRoofing}>
                                    <Link className='services-a-same roofing-pointer'>House Wire ring Project</Link>
                                    <ul className={`roofing-hover ${isActiveRoofing ? 'active-roofing-hover' : ''}`}>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/polycarbonate-roofing'}>Polycarbonate Roofing</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/self-support'}>Self Supporting Roofing</Link>
                                    </ul>
                                </ul> */}
                                {/* <ul onMouseEnter={handleActiveRoad} onMouseLeave={handleDeActiveRoad}>
                                    <Link className='services-a-same road-safety-pointer'>Road Safety Product</Link>
                                    <ul className={`road-safety-hover ${isActiveRoad ? 'active-road-safety-hover' : ''}`}>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/antiglare'}>Antiglares</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/road-barrier'}>Road Barrier</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/road-maker'}>Road Marker</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/road-reflect'}>Road Reflector</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/road-delineator'}>Road Delineator</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/road-stud'}>Road Stud</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/traffic-cones'}>Traffic Cone</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/spring-post'}>Spring Post</Link>
                                        <Link onClick={handleDeActiveMenuDropDown} to={'/solar-blinker'}>Solar Blinkers</Link>
                                    </ul>
                                </ul> */}
                            </ul>
                        </li>
                        <li className='career-pointer' onMouseEnter={handleActiveCareer} onMouseLeave={handleDeActiveCareer}>
                            <Link to={'/career'} onClick={handleDeActiveMenuDropDown} className='for-white'>Career</Link>

                        </li>
                        {/* <li className='client-pointer' onMouseEnter={handleActiveClient} onMouseLeave={handleDeActiveClient}>
                            <Link to={'/project'} onClick={handleDeActiveMenuDropDown} className='for-white'>Projects</Link>
                        </li> */}
                        <li>
                            <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleActiveMenuDropDown} className="menu-bar">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
