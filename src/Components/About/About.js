import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import "./about.css";
// import { width } from "../../store/reducerSlice";

export default function About(props) {
    const scroll = useRef();
    var { widthAbout } = useSelector(state => state.data);

    // console.log(scroll.current.offsetTop)
    // widthAbout = scroll.current;
    // console.log(widthAbout)
    return (
        <div className='about' ref={scroll}>
            <div className='already-component'>
                <span>Get To Know Me</span>
                <h1>About Me</h1>
            </div>
            <div className='container'>
                <img src='./images/my-photo.jpg' />
                <div className='who-am-i'>
                    <h6>Who Am I</h6>
                    <h3>Who Am I</h3>
                    <p> I Studied At Elzero Web Schol And With Koluyoruz Platform IHave A Year Pf Experience
                        In THis Field, Seeking a programmer job in the field of Front End to benefit
                        from teamwork and leadership skills in coordinating programmers efforts.</p>
                    <div className="personel-data">
                        <div className=''>Name : <span>Muhammed Akil</span></div>
                        <div className=''>Email : <span>ahmed.najy5@gmail.com</span></div>
                        <div className=''>Age : <span>25</span></div>
                        <div className=''>Addres : <span>Istanbul, sultangazi, turkey</span></div>
                        <div>
                            <a href='https://docs.google.com/document/d/1_E_aCmcrRxS942aU8OE3c8mNqkg2fZRJmTzPMm4sIqw/edit' target="_blank">Download CV</a>
                        </div>
                        <div className='social-media'>
                            <i className="fa-brands fa-linkedin"><a href='https://www.linkedin.com/in/muhammd-akil-01a90a212/'></a></i>
                            <i className="fa-brands fa-github"><a href='https://github.com/moudy-wold?tab=repositories'></a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
