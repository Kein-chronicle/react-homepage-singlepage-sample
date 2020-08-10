import React, {useState, useEffect} from 'react'
import './css.css'

import GrayBack from '../assets/grayBack.png'
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
        <div id="slider2" className="sliderSide" style={{ height:useWindowSize().height, backgroundImage:`url(${Vror7Back})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
            <div style={{display:'flex', flexDirection:'column', height:useWindowSize().height}}> 
            {/* , backgroundImage:`url(${Eyedocpro})`, backgroundRepeat:'no-repeat', backgroundPosition:'100% 0px', backgroundSize:'50% auto' */}

                <div style={{flex:"1", flexShrink:"1"}}></div>
                <div style={{display:'flex', flex:"7", flexShrink:"1"}}>
                    <div style={{flex:'1'}} />
                    <div style={{display:'flex', flexDirection:'column', flex:"7", flexShrink:"1"}}>
                        
                        <div style={{display:'flex', height:'44px', fontSize:'20px'}} >
                            <div style={{height:"44px", display:'flex', flexDirection:'column', width:'123px', textAlign:'center', backgroundColor:'#4CCD94', color:'white', borderRadius:'22px'}}>
                                <div style={{flex:'1'}} />
                                <div>의료기기</div>
                                <div style={{flex:'1'}} />
                            </div>
                            <a onClick={(e)=>{menuClick(e, "slider2")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'#4CCD94', marginLeft:"32px", borderBottom:'1px solid #4CCD94'}}>
                                <div style={{flex:'1'}} />
                                <div>시신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                            <a onClick={(e)=>{menuClick(e, "slider3")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'white', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>전정신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                            <a onClick={(e)=>{menuClick(e, "slider4")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'white', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>뇌신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                        </div>
                        <div style={{height:'17px'}} />
                        <div style={{height:'46px', textAlign:'left', fontSize:'40px', color:'white'}}>
                            VR(가상현실)을 이용한 새로운 개념의 안과 검사기
                        </div>
                        <div style={{flex:"1", textAlign:'left', paddingTop:'86px'}}>
                            <img src={Logo7} style={{ height:"130px" }} />
                        </div>
                        <div style={{fontSize:'14px', color:'#707070', textAlign:'left'}}>
                            7가지 안과검사(시야검사, 동공검사, 외안근검사, 랑카스터검사, 입체시검사, 회선검사, 사시각검사)<br />식품의학안전처&#60;차세대의료기기&#62;&#60;융복합신의료기기&#62;선정<br />미국 FDA 인증(Device Listing number D362543)
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