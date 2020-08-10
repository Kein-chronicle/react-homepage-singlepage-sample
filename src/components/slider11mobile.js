import React, {useState, useEffect} from 'react'
import './css.css'

import GrayBack from '../assets/ndiback.png'
import Logo7 from '../assets/vror7logoWhite.png'
import Brain from '../assets/brain.png'
import Logo from '../assets/VROR_logo.png'
import BlackBack from '../assets/blackback.png'
import Back6 from '../assets/back6.png'
import Back8 from '../assets/back8.png'
import Back9 from '../assets/back9.png'
import Back10 from '../assets/back10.png'
import Back11 from '../assets/back11.png'
import Back12 from '../assets/back12.png'
import Eyedocpro from '../assets/eyedocpro.png'
import Ndiicon from '../assets/litelogo.png'
import Eyedoclite from '../assets/eyedoclite.png'
import Eyedocproitem from '../assets/ktitem.png'
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
        <div id="slider6" className="sliderSide" style={{ height:useWindowSize().height, backgroundColor:'white', backgroundImage:`url(${BlackBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
            <div style={{display:'flex', flexDirection:'column', height:useWindowSize().height, backgroundImage:`url(${Eyedocproitem})`, backgroundRepeat:'no-repeat', backgroundPosition:'100% 60%', backgroundSize:'80% auto'}}> 
            {/*  */}

                <div style={{flex:"1", flexShrink:"1"}}></div>
                <div style={{display:'flex', flex:"7", flexShrink:"1"}}>
                    <div style={{flex:'1'}} />
                    <div style={{display:'flex', flexDirection:'column', flex:"7", flexShrink:"1"}}>
                        
                        <div style={{display:'flex', fontSize:'20px'}} >
                            <div style={{height:"44px", display:'flex', flexDirection:'column', width:'123px', textAlign:'center', backgroundColor:'#0078FF', color:'white', borderRadius:'22px'}}>
                                <div style={{flex:'1'}} />
                                <div>헬스케어</div>
                                <div style={{flex:'1'}} />
                            </div>
                            {/* <a onClick={(e)=>{menuClick(e, "slider5")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'white', marginLeft:"32px"}}>
                                <div style={{flex:'1'}} />
                                <div>아이닥 프로</div>
                                <div style={{flex:'1'}} />
                            </a> */}
                            <a onClick={(e)=>{menuClick(e, "slider6")}} style={{fontSize:"17px", height:"44px", display:'flex', flexDirection:'column', color:'#0078FF', marginLeft:"32px", textAlign:'left'}}>
                                <div style={{flex:'1'}} />
                                <div>아이닥 라이트</div>
                                <div style={{flex:'1'}} />
                            </a>
                        </div>
                        <div style={{height:'17px'}} />
                        <div style={{height:'46px', textAlign:'left', fontSize:'20px', color:'white'}}>
                            개인 HMD로 만나는 눈 헬스케어(KT Super VR 기본앱)
                        </div>
                        <div style={{flex:"1", textAlign:'left', paddingTop:'20px', paddingBottom:'20px'}}>
                            <img src={Ndiicon} style={{ width:"80%" }} />
                        </div>
                        <div style={{fontSize:'14px', color:'#707070', textAlign:'left'}}>
                            VR 안과 APP<br />
                            A.I 문진에 따른 자동검사 추천<br />
                            개인에 맞춘 측정결과 이력 제공
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