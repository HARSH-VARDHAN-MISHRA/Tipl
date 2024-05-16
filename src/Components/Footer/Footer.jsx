import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="same-col col-1">
            <div className="heading">
              <span>Quick Links</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/application'}>Applications</Link></li>
              {/* <li><Link to={'/project'}>Projects</Link></li> */}
              {/* <li><Link to={'/credentials'}>Certificates</Link></li>
              <li><Link to={'/infrastructure'}>Our Infrastructure</Link></li> */}
              <li><Link to={'/management'}>Our Management</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="same-col col-2">
            <div className="heading">
              <span>Our Products</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/power-solar'}>Power Plant & Solar Plant </Link></li>
              <li><Link to={'/Road-Construction'}>Road Construction</Link></li>
              <li><Link to={'/electrical-industrial'}>Electrical Industrial Project </Link></li>
              <li><Link to={'/transmission-line'}>Transmission Line Project</Link></li>
              <li><Link to={'/rural-distribution'}>Rural Electrification And Distribution Project</Link></li>
              <li><Link to={'/ddugjy'}>DDUGJY And Underground Project</Link></li>
              <li><Link to={'/house-wire'}>House Wire ring Project</Link></li>
              <li><Link to={'/High-voltage'}>High voltage Distribution Service</Link></li>
            </ul>
          </div>
          <div className="same-col col-3">
            <div className="heading">
              <span>Get In Touch</span>
            </div>
            <div className="adress-box footerlistsame">
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>54 VASHISHTHA NAGAR SONKH ROAD Mathura Mathura Mathura UP 281001</p>
              </div>
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>D-652,GALI NO -31, AMAR COLONY DELHI -110094</p>
              </div>
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>Karwan Nadi Triveni, Nagar khair ,Aligarh (UP)202138</p>
              </div>
              <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <a href='tel:+91 9813513375'>9813513375</a>
              </div>
              <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <a href='tel:+91 9926288424'>9926288424</a>
              </div>
              <div className="mail adress-same">
              <i class="ri-mail-fill"></i>
                <a href='mailto: shailendra@greenwaysinfra.com'>shailendra@greenwaysinfra.com</a>
              </div>
              <div className="mail-2 adress-same">
              <i class="ri-mail-fill"></i>
                <a href="mailto:sales@greenwaysinfra.com">sales@greenwaysinfra.com</a>
              </div>
            </div>
          </div>
          <div className="same-col col-4">
            <div className="heading">
              <span>Follow On</span>
            </div>
            <div className="footerlistsame social-link">
              <Link target='_blank' to={''}><i class="ri-facebook-box-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-youtube-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-linkedin-box-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-instagram-line"></i></Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>© 2024 TIPL. All Right Reseverd.</p>
          <p>Designed By <a href="https://digiindiasolutions.com/">Digi India Solution</a></p>
        </div>
      </footer>
  )
}

export default Footer