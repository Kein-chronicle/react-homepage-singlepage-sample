import React from 'react'
import Logo from '../assets/eyedoc_logo.png'
import wideLogo from '../assets/eyedr_logo_wide.png'
import './css.css'


function Content() {
    const menuClick = (e, menu) => {
        e.preventDefault()
        var top = 0
        if (menu !== 'top') {
            top = document.getElementById(menu).offsetTop - 160
        }
        
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div 
        className="row"
        style={{margin:0}}
        >
            <div className="col">
                <a href=" #" onClick={(e)=>{menuClick(e, 'top')}}>
                    <img className="logo" src={wideLogo} alt="logo" />
                </a>
            </div>
            <div className="col">

            </div>
            <div className="row">
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'intro')}}>
                    Product
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                    System
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                    Service
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content3')}}>
                    Company
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'constactUs')}}>
                    Contact us
                </a>
            </div>
        </div>
    )
}

export default Content