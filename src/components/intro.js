import React from 'react'
import wideLogo from '../assets/eyedr_logo_wide.png'
import eyedrLite from '../assets/eyedr_lite.png'
import eyedrPro from '../assets/eyedr_pro.png'
import difference from '../assets/product_difference.png'
import './css.css'

function Content() {
    return (
        <div id="intro" className="contentSide introSide">
            <div style={{marginTop:'5rem'}}>
                <h3 style={{color:'gray'}}>의료기기 VROR의 기술 그대로 일반 VR HMD기기에 적용하여</h3>
                <h1>쉽게 눈 건강 상태를 체크할 수 있는 디지털 헬스케어 제품</h1>
                <div>
                    <img style={{width:'auto', height:'60px', margin:'20px'}} src={wideLogo} alt="eyedr logo wide" />
                </div>
            </div>
            <div className="row" style={{marginTop:'3rem', marginBottom:'2rem', color:'gray'}}>
                <div className="col">
                    <div>
                        <img style={{width:'70%'}} src={eyedrPro} alt="eyedr pro" />
                    </div>
                    <div>
                        Eye Dr. Pro
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img style={{width:'70%'}} src={eyedrLite} alt="eyedr lite" />
                    </div>
                    <div>
                        Eye Dr. Lite
                    </div>
                </div>
            </div>
            <div style={{marginBottom:'5rem', color:'gray'}}>
                <div>
                    각각 Eye Dr. Pro 총 11종의 검사, Eye Dr. Lite 총 7종의 검사
                    <br />
                    모두 케어 서비스, O2O 서비스를 제공합니다
                </div>
                <div style={{marginTop:'3rem'}}>
                    <img src={difference} alt="difference" />
                </div>
            </div>
        </div>
    )
}

export default Content