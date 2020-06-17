import React from 'react'
import Logo from '../assets/logo-sample.png'
import './css.css'
import Image from '../assets/sample_img.jpg'

function Content() {
    const menuClick = (e, menu) => {
        e.preventDefault()
        const top = document.getElementById(menu).offsetTop
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className="row footerSide">
            <div className="identifySide">
                <div>
                    <img src={Logo} alt="footer-logo-img" style={{height:"100px"}} />
                </div>
                <div>
                    <h3>Company Name</h3>
                </div>
                <div>
                    대표자 : 홍길동
                </div>
                <div>
                    사업자등록번호 : 912-31231-2341241
                </div>
                <div>
                    Address : 서울특별시 서초구 서초4동 강남대로 465
                </div>
                <div>
                    Tel : +82-2-332-2321
                </div>
            </div>
            <div className="menusSide">
                <div>
                    <h2>Welcome to Company!</h2>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'intro')}}>
                        Intro
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                        Content 1
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                        Content 2
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content3')}}>
                        Content 3
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'constactUs')}}>
                        Contact us
                    </a>
                </div>
                <div>
                    This hompage can give product's infomation. 
                    <br />
                    Copyright by Kein chronicle
                </div>
            </div>
            <div className="col" >
                <h1>Hello!</h1>
                Company want to make good sociaty, <br />
                So, We try It! <br />
                Our product can give you free. <br />
                Just Pick us. <br />
                You will have free.<br />
            </div>
            <div className="cooperations">
                <div>
                    <img src={Image} alt="cooperation1" />
                    Cooperation 1
                </div>
                <div>
                    <img src={Image} alt="cooperation2" />
                    Cooperation 2
                </div>
                <div>
                    <img src={Image} alt="cooperation3" />
                    Cooperation 3
                </div>
                <div>
                    <img src={Image} alt="cooperation4" />
                    Cooperation 4
                </div>
                <div>
                    <img src={Image} alt="cooperation5" />
                    Cooperation 5
                </div>
            </div>
        </div>
    )
}

export default Content