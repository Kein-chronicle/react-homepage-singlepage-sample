import React, {useState, useEffect} from 'react'
import './css.css'

import GrayBack from '../assets/ndiback.png'
import Logo7 from '../assets/vror7logoWhite.png'
import Brain from '../assets/brain.png'
import Logo from '../assets/VROR_logo.png'
import Back6 from '../assets/back6.png'
import Back8 from '../assets/back8.png'
import Back9 from '../assets/back9.png'
import Back10 from '../assets/back10.png'
import Back11 from '../assets/back11.png'
import Back12 from '../assets/back12.png'
import Eyedocpro from '../assets/eyedocpro.png'
import Ndiicon from '../assets/ndiicon.png'
import Eyedoclite from '../assets/eyedoclite.png'
import VrorHmd from '../assets/vrorHMD.png'
import Vror7Back from '../assets/vror7back.png'


// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : 0,
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
    const menuClick = (e, menu) => {
        e.preventDefault()
        var top = 0
        if (menu !== 'top') {
            top = document.getElementById(menu).offsetTop
        }
        
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div id="slider4" className="sliderSide" style={{ height:useWindowSize().height, backgroundImage:`url(${GrayBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'100% 100%'}} >
            <div style={{display:'flex', flexDirection:'column', height:useWindowSize().height}}> 
            {/* , backgroundImage:`url(${VrorHmd})`, backgroundRepeat:'no-repeat', backgroundPosition:'100% 0px', backgroundSize:'50% auto' */}

                <div style={{flex:"1", flexShrink:"1"}}></div>
                <div style={{display:'flex', flex:"7", flexShrink:"1"}}>
                    <div style={{flex:'1'}} />
                    <div style={{display:'flex', flexDirection:'column', flex:"7", flexShrink:"1"}}>
                        
                        <div style={{display:'flex', fontSize:'20px'}} >
                            <div style={{height:"44px", display:'flex', flexDirection:'column', width:'123px', textAlign:'center', backgroundColor:'#4CCD94', color:'white', borderRadius:'22px'}}>
                                <div style={{flex:'1'}} />
                                <div>의료기기</div>
                                <div style={{flex:'1'}} />
                            </div>
                            {/* <a onClick={(e)=>{menuClick(e, "slider2")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'white', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>시신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                            <a onClick={(e)=>{menuClick(e, "slider3")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'white', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>전정신경계</div>
                                <div style={{flex:'1'}} />
                            </a> */}
                            <a onClick={(e)=>{menuClick(e, "slider4")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'#4CCD94', marginLeft:"32px", textAlign:'left'}}>
                                <div style={{flex:'1'}} />
                                <div>뇌신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                        </div>
                        <div style={{height:'17px'}} />
                        <div style={{height:'46px', textAlign:'left', fontSize:'20px', color:'white'}}>
                        뇌병변 진단 및 맞춤형 재활치료기
                        </div>
                        <div style={{flex:"1", textAlign:'left', paddingTop:'20px', paddingBottom:'20px'}}>
                            <img src={Ndiicon} style={{ width:"80%" }} />
                        </div>
                        <div style={{fontSize:'14px', color:'#707070', textAlign:'left'}}>
                        VR  Wearable Device 형태의 혁신적인 뇌 질환 진단 도구 <br />
                        안구운동추적 및 시야측정기술을 통해 뇌졸중, 뇌경색, 뇌종양 등의 징후를 미리 파악(골든 타임 확보)
                        </div>
                    </div>
                    <div style={{flex:'1'}} />

                </div>
                <div style={{flex:"1", flexShrink:"1"}}></div>
            </div>
        </div>
    )
}

export default Content