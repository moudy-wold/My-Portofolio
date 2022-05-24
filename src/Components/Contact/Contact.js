import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uy1v5bg', 'template_nxnn2zm', form.current, "DA_QF4hzICqNByVXc")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <div className='already-component'>
                <span>Contact Me</span>
                <h1>Get In Touch</h1>
            </div>
            <div className='container'>
                <div className='form'>
                    <h3>Message Me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Name' />
                        <input type="email" name="user_email" placeholder='Email' />
                        <input type='text' name='user_subject' placeholder='Subject' />
                        <textarea name="message" placeholder='Message'></textarea>
                        <input type='submit' value='Send Message ' />
                    </form>
                </div>
                <div className='contact-info'>
                    <h3>Contact Info</h3>
                    <p>Always Available for freelance Work if the right project comes along, feel free to contact me!</p>
                    <ul className='content'>
                        <li><i className="fas fa-signature"></i>
                            <div>Name<p>Muhammed Akil</p></div>
                        </li>
                        <li><i className="fas fa-map-marker-alt"></i>
                            <div>Location<p>Istanbul, sultangazi Turkey</p></div>
                        </li>
                        <li><i className="fas fa-phone-square-alt"></i>
                            <div>Call Me<p>00905374561068</p></div>
                        </li>
                        <li><i className="fas fa-paper-plane"></i>
                            <div>Email<p>ahmad.najy5@gmail.com</p></div>
                        </li>
                        <li><i className="fab fa-linkedin"></i>
                            <div>Linkid In<p>muhammd akil</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
