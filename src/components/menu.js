import React from 'react'
import Logo from '../assets/logo-sample.png'
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
                    <img className="logo" src={Logo} alt="logo" />
                </a>
            </div>
            <div className="col"></div>
            <div className="row">
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'intro')}}>
                    home
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                    contentone
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                    contenttwo
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content3')}}>
                    content3
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'constactUs')}}>
                    contact us
                </a>
            </div>
        </div>
    )
}

export default Content