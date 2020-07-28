import React, {useState, useEffect} from 'react'
import Logo from '../assets/eyedoc_logo.png'
import wideLogo from '../assets/eyedr_logo_wide.png'
import './css.css'

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
        <div 
        className="row"
        style={{
            margin:0,
            position: "fixed",
            top:'15px',
            width:useWindowSize().width,
            zIndex:'9999'
        }}
        >
            <div className="col" style={{padding:"0px"}}>
            </div>
            <div className="col" style={{padding:"0px"}}>

            </div>
            <div className="col" style={{padding:"0px"}}>

            </div>
            <div className="row" style={{padding:"0px", margin:'0px'}}>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'top')}}>
                    홈
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'slider2')}}>
                    제품 및 서비스
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content1')}}>
                    고객센터
                </a>
                <a className="menuBtn" href=" #" onClick={(e)=>{menuClick(e, 'content2')}}>
                    회사소개
                </a>
            </div>

            <div className="col" style={{padding:"0px"}}>
            </div>
        </div>
    )
}

export default Content