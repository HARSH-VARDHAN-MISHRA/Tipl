import React, { useEffect } from 'react'
import './AboutPage.css'
import p from './about-bg.jpg'

function AboutPage() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    })
    return (
        <section className='aboutPage-section'>
            <div className="about-container">
                <div className="heading">
                    <span>About Us</span>
                </div>
                <div className="main-container">
                    <div className="row-1">
                        <div className="left">
                            <img src={p} alt="" />
                        </div>
                        <div className="right flex flex-col gap-3">
                            <p>Approved By Government Of India Ministry of Corporate Affairs ( Registrar Of Companies, Kanpur.  </p>
                            <p>Ramsevak Singh Tangad Infra projects Private Limited is a construction company in India, with expertise in the execution and construction of infrastructure projects. Governed by a highly qualified Board of Directors.</p>
                            <p>The company has strong construction capabilities and is empanelled with leading developmental organizations including National Highway Authority of India along with 4.37 crore Turnover yearly. </p>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Certified ROC CIN No.</th>
                                <td>U70100UP2014PTC065237</td>
                            </tr>
                            <tr>
                                <th>Service Tax No.</th>
                                <td>AAGCR9877HSD001</td>
                            </tr>
                            <tr>
                                <th>Tin No.</th>
                                <td>0920906643C</td>
                            </tr>
                            <tr>
                                <th>PAN No.</th>
                                <td>AAGCR98777H</td>
                            </tr>
                            <tr>
                                <th>PF No.</th>
                                <td>2235199553UPAGR</td>
                            </tr>
                            <tr>
                                <th>ESI  No.</th>
                                <td>21000530570001099</td>
                            </tr>
                            <tr>
                                <th>A-Class Lince </th>
                                <td>F-R-D-41</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    )
}

export default AboutPage
