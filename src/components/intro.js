import React, { useState, useEffect } from 'react'
import wideLogo from '../assets/eyedr_logo_wide.png'
import eyedrLite from '../assets/eyedr_lite.png'
import eyedrPro from '../assets/eyedr_pro.png'
import difference from '../assets/product_difference.png'
import './css.css'


// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }

function Content() {
    return (
        <div id="intro" className="contentSide introSide">
            <div style={{marginTop:'5rem'}}>
                <h3 style={{color:'gray'}}>의료기기 VROR의 기술 그대로 일반 VR HMD기기에 적용하여</h3>
                <h1 style={{paddingTop:'15px'}}>쉽게 눈 건강 상태를 체크할 수 있는 디지털 헬스케어 제품</h1>
                <div>
                    <img style={{width:'auto', height:'60px', margin:'20px'}} src={wideLogo} alt="eyedr logo wide" />
                </div>
            </div>
            <div className={useWindowSize().width < 500 ? null : "row"} style={{marginTop:'3rem', marginBottom:'2rem', color:'gray'}}>
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
            <div style={{marginBottom:'5rem', color:'gray', fontSize:"18px"}}>
                <div>
                    <p><span style={{fontWeight:'bold', color:'black'}}>Eye Dr. Pro</span> 시력검사 등 총 11종의 측정 제공</p>
                    <p><span style={{fontWeight:'bold', color:'black'}}>Eye Dr. Lite</span> 시력검사 등 총 7종의 측정 제공</p>
                    <p>
                        그외<br />
                        Eye care service<br />
                        O2O service
                    </p>
                </div>
                <div style={{marginTop:'3rem'}}>
                    {/* <img src={difference} alt="difference" /> */}
                </div>
            </div>
        </div>
    )
}

export default Content