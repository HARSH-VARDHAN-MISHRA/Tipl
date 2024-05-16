import React, { useEffect, useState } from 'react';
import './Contact.css';
import contactBG from './contact-bg.jpg';
import toast from 'react-hot-toast';
// import OurClient from '../OurClient/OurClient';
import axios from 'axios';

function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const [formdata, setformdata] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Message: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formdatafetch = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('', formdata);
            toast.success('Message Sent Successfully!');
            console.log(response);
        } catch (error) {
            console.log(error);
            toast.error("Error Occurred");
        }
    };

    return (
        <section className='contact-section'>
            <div className="container">
                <div className="contact-main-container">
                    <div className="heading">
                        <span><i className="ri-arrow-right-double-fill"></i>Get in Touch<i className="ri-arrow-left-double-line"></i></span>
                    </div>
                    <div className="main-container">
                        <div className="up">
                            <div className="left">
                                <img src={contactBG} alt="" />
                            </div>
                            <form onSubmit={formdatafetch}>
                                <div className="name same-field">
                                    <input type="text" placeholder='Name' name='Name' onChange={handlechange} required />
                                </div>
                                <div className="name same-field">
                                    <input type="email" placeholder='Email' name='Email' onChange={handlechange} required />
                                </div>
                                <div className="name same-field">
                                    <input type="text" placeholder='Phone No.' name='PhoneNumber' onChange={handlechange} required />
                                </div>
                                <div className="textarea same-field">
                                    <textarea placeholder='Message' name='Message' onChange={handlechange} required></textarea>
                                </div>
                                <input type="hidden" name="_next" value="" />
                                <input type="hidden" name="_template" value="table" />
                                <button className='contact-btn' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-parent">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.655811398528!2d77.64168847369781!3d27.479972835486535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973738b4e61c323%3A0x921329d0e12cacc0!2sLeela%20kamal%20niwas%20sonkh%20road%20mathura!5e0!3m2!1sen!2sin!4v1715856691661!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <a href='https://www.google.com/maps/place/Leela+kamal+niwas+sonkh+road+mathura/@27.4799728,77.6416885,17z/data=!3m1!4b1!4m6!3m5!1s0x3973738b4e61c323:0x921329d0e12cacc0!8m2!3d27.4799681!4d77.6442634!16s%2Fg%2F11s69tw7kw?entry=ttu' target='_blank' className="hover-effect"></a>
            </div>
            {/* <OurClient /> */}
        </section>
    );
}

export default Contact;
