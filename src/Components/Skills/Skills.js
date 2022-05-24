import React, { useRef, useState, useEffect } from 'react';
import './skills.css';

export default function Skills() {
    const skills = useRef();
    const cou1 = useRef();
    const cou2 = useRef();
    const cou3 = useRef();
    const cou4 = useRef();
    const cou5 = useRef();
    const track1 = useRef();
    const track2 = useRef();
    const track3 = useRef();
    const track4 = useRef();
    const track5 = useRef();
    window.onscroll = () => {
        if (window.scrollY >= skills.current.offsetTop - 140) {
            cou1.current.style.left = cou1.current.innerHTML
            cou2.current.style.left = cou2.current.innerHTML
            cou3.current.style.left = cou3.current.innerHTML
            cou4.current.style.left = cou4.current.innerHTML
            cou5.current.style.left = cou5.current.innerHTML
            track1.current.style.width = track1.current.dataset.level
            track2.current.style.width = track2.current.dataset.level
            track3.current.style.width = track3.current.dataset.level
            track4.current.style.width = track4.current.dataset.level
            track5.current.style.width = track5.current.dataset.level

        }
    }

    return (
        <div className='skills' ref={skills}>
            <div className='container'>
                <p>My level Of Knowledge in some tools</p>
                <h2>My Skills</h2>
                <div className='box-of-skill'>
                    <div className='skill'>
                        <span>HTML/CSS</span>
                        <div className='empty-track'>
                            <div className='track' ref={track1} data-level='95%'></div>
                            <span className="count" ref={cou1}>95%</span>

                        </div>

                    </div>
                    <div className='skill'>
                        <span>SASS-BOOTSTRAP</span>
                        <div className='empty-track'>
                            <div className='track' ref={track2} data-level='95%'></div>
                            <span className='count' ref={cou2}>95%</span>

                        </div>

                    </div>
                    <div className='skill'>
                        <span>JAVA SCRIPT</span>
                        <div className='empty-track'>
                            <div className='track' ref={track3} data-level='90%'></div>
                            <span className='count' ref={cou3}>90%</span>

                        </div>

                    </div>
                    <div className='skill'>
                        <span>REACT JS</span>
                        <div className='empty-track'>
                            <div className='track' ref={track4} data-level="90%"></div>
                            <span className='count' ref={cou4}>90%</span>

                        </div>

                    </div>
                    <div className='skill'>
                        <span>PUG/GULP JS</span>
                        <div className='empty-track'>
                            <div className='track' ref={track5} data-level='90%'></div>
                            <span className="count" ref={cou5}>90%</span>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
