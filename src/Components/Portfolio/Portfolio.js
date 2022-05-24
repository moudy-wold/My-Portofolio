import React from 'react';
import "./portfolio.css";

export default function Portfolio() {

    return (
        <div className="portfolio">
            <div className='already-component'>
                <span>Get To Know Me</span>
                <h1>Portfolio</h1>
            </div>
            <div className='container'>
                <div className='box-of-projes'>
                    <div className='proje'>
                        <img src='./images/store.png' />
                        <div className="link">
                            <a href="https://zingy-scone-cfbe0b.netlify.app" target="_blanck">STORE</a>
                        </div>
                    </div>
                    <div className='proje'>
                        <img src='./images/crud.png' />
                        <div className="link">
                            <a href="https://moudy-wold.github.io/creu-JS/" target="_blank">CURD</a>
                        </div>
                    </div>
                    <div className='proje'>
                        <img src='./images/template.png' />
                        <div className="link">
                            <a href="https://moudy-wold.github.io/responsive-template-3/" target="_blanck">ACTION STIE</a>
                        </div>
                    </div>
                    <div className='proje'>
                        <img src='./images/memory-game.png' />
                        <div className="link">
                            <a href="https://moudy-wold.github.io/Memory-Game/" target="_blanck">MEMORY GMAE</a>
                        </div>
                    </div>
                    <div className='proje'>
                        <img src='./images/piano.png' />
                        <div className="link">
                            <a href="https://moudy-wold.github.io/Piano-JS/" target="_blanck">PIANO</a>
                        </div>
                    </div>
                    <div className='proje'>
                        <img src='./images/kasper.png' />
                        <div className="link">
                            <a href="https://moudy-wold.github.io/kasper-site/" target="_blanck">KASPER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
