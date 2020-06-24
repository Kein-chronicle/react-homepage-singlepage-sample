import React from 'react'
import Logo from '../assets/hojundot-logo-tran.png'
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
        className="container"
        style={{margin:0}}
        >
            <div className="row">
                <div className="col-3"></div>   
                <div className="col-6">
                    <a href=" #" onClick={(e)=>{menuClick(e, 'top')}}>
                    <img className="logo" src={Logo} alt="logo" /></a>
                    </div>
                <div className="col-3"></div>
            </div>

            <div className="d-flex justify-content-around">
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'intro')}}>
                        home
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                    projects
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                    ongoing projects
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content3')}}>
                    links
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'constactUs')}}>
                    about me
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'constactUs')}}>
                    contact
                </a>
            </div>
        </div>
    )
}

export default Content