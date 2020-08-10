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
import Vrvng from '../assets/vrvng.png'
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
        <div id="slider3" className="sliderSide" style={{ height:useWindowSize().height, backgroundImage:`url(${GrayBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
            <div style={{display:'flex', flexDirection:'column', height:useWindowSize().height, backgroundImage:`url(${VrorHmd})`, backgroundRepeat:'no-repeat', backgroundPosition:'100% 0px', backgroundSize:'50% auto'}}> 
            {/*  */}

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
                            <a  onClick={(e)=>{menuClick(e, "slider2")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'black', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>시신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                            <a  onClick={(e)=>{menuClick(e, "slider3")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'#4CCD94', marginLeft:"32px", borderBottom:'1px solid #4CCD94'}}>
                                <div style={{flex:'1'}} />
                                <div>전정신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                            <a onClick={(e)=>{menuClick(e, "slider4")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'black', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>뇌신경계</div>
                                <div style={{flex:'1'}} />
                            </a>
                        </div>
                        <div style={{height:'17px'}} />
                        <div style={{height:'46px', textAlign:'left', fontSize:'40px', color:'black'}}>
                            VR을 이용한 안진 검사기
                        </div>
                        <div style={{flex:"1", textAlign:'left', paddingTop:'86px'}}>
                            <img src={Vrvng} style={{ height:"130px" }} />
                        </div>
                        <div style={{fontSize:'14px', color:'#707070', textAlign:'left'}}>
                        어지럼증을 유발하는 전정 질환 검사(시추적검사, 시운동성 안진검사)
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