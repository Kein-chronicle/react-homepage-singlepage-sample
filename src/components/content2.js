import React from 'react'
import Image1 from '../assets/service1.png'
import Image2 from '../assets/service2.png'
import Image3 from '../assets/service3.png'
import './css.css'

function Content() {
    return (
        <div id="content2" className="contentSide contentSideWhite" style={{marginTop:'3rem', marginBottom:'3rem'}}>
            <div>
                <h1>Eye Dr.VR 서비스</h1>
                <h4>가정이나 공공장소 등에서도 쉽게 눈상태를 체크하고 병의원과 연계할 수 있는 서비스 구축</h4>
            </div>

            <div>
                <img src={Image1} alt="content1-Image2" />
            </div>
            <div>
                <img src={Image2} alt="content1-Image2" />
            </div>
            <div>
                <img src={Image3} alt="content1-Image2" />
            </div>
            
        </div>
    )
}

export default Content