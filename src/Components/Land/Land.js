import React from 'react';
import "./Land.css";
import { Container } from "react-bootstrap";
export default function Land() {
    return (
        <div className='land'>
            <Container>
                <div className='info'>
                    <h2>I`m <span>Muhammed</span> Akil</h2>
                    <h4>I`m A <span>Front End</span> Developer</h4>
                </div>
                <img src='./images/laptop dark.jpg' />
            </Container>
        </div>
    )
}
