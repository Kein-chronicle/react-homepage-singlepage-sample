import React from 'react'
import Logo from '../assets/m2s_logo_white.png'
import './css.css'
import Image from '../assets/sample_img.jpg'

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
        <div className="row footerSide">
            <div className="identifySide">
                <div>
                    <img src={Logo} alt="footer-logo-img" style={{height:"100px"}} />
                </div>
                <div>
                    <h3>M2S+</h3>
                </div>
                <div>
                    대표자 : 이태휘
                </div>
                <div>
                    사업자등록번호 : 440-87-00742
                </div>
                <div>
                    Address : 경기도 성남시 수정구 창업로 54 기업성장센터 3층 323, 324호 / 8층 822호
                </div>
                <div>
                    Tel : +82-31-8017-0418
                </div>
            </div>
            <div className="menusSide">
                <div>
                    <h2>Welcome to Eye Dr.VR!</h2>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'intro')}}>
                        Product
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                        System
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                        Service
                    </a>
                </div>
                <div>
                    <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content3')}}>
                        Company
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
                    Copyright by M2S+
                </div>
            </div>
            <div className="col" >
                <h1>Hello!</h1>
                국내 최고의 연구 개발진 참여<br />
                윤영욱 고려대학교의과대학장, 김병조 고려대학교 연구교학처장, <br />
                김정빈 신경과 교수,  이선욱 안신경학 교수, <br />
                전 오스템임플란트 개발총괄상무  변강섭 CTO  등 <br />
                국내 최고의 의료기기 개발자 및 안.신경학 전문의로 구성<br />
            </div>
            <div className="cooperations">
                {/* <div>
                    <img src={Logo} alt="cooperation1" />
                    Cooperation 1
                </div>
                <div>
                    <img src={Logo} alt="cooperation2" />
                    Cooperation 2
                </div>
                <div>
                    <img src={Logo} alt="cooperation3" />
                    Cooperation 3
                </div>
                <div>
                    <img src={Logo} alt="cooperation4" />
                    Cooperation 4
                </div>
                <div>
                    <img src={Logo} alt="cooperation5" />
                    Cooperation 5
                </div> */}
            </div>
        </div>
    )
}

export default Content