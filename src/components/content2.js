import React, { useEffect, useState } from 'react'
import Test_img from '../assets/service_test.png'
import Content_img from '../assets/service_content.png'
import O2o_img from '../assets/service_o2o.png'
import './css.css'

function GapLine( {color} ) {
    return (
        <div className="d-flex" style={{padding:'15px'}}>
            <div className="flex-grow-1" style={{padding:'0px'}} />
            <div style={{width:'200px', height:'2px', padding:'0px', backgroundColor:color}} />
            <div className="flex-grow-1" style={{padding:'0px'}} />
        </div>
    )
}

function Circle({text, color}) {
    return (
        <span style={{display:'inline-block', lineHeight:'30px', width:"33%", height:'40', verticalAlign:'middle', backgroundColor:color, color:'white', fontWeight:'bolder', fontSize:useWindowSize().width < 500 ? "14px" : "23px", padding:'20px', borderRadius:'60px'}} dangerouslySetInnerHTML={ {__html: text} } />
    )
}


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
        <div id="content2" className="contentSide contentSideWhite" style={{marginTop:'3rem', marginBottom:'3rem'}}>
            <div>
                <h1>Eye Dr.VR 서비스</h1>
                <h4>가정이나 공공장소 등에서도 쉽게 눈상태를 체크하고 병의원과 연계할 수 있는 서비스 구축</h4>
            </div>
            <div className={useWindowSize().width < 500 ? null : "row"} style={{marginLeft:'0px', marginRight:'0px'}}>
                <div className="col" />
                <div style={useWindowSize().width < 500 ? null : {width:'30%', maxWidth:'400px'}}>
                    <GapLine color="navy" />
                    <h1 style={{color:'navy'}}>눈 측정</h1>
                    <GapLine color="navy" />
                    <div>
                        <Circle text='VR<br />APP' color="navy" />
                    </div>
                    <img src={Test_img} style={{marginTop:'20px'}} alt="content1-Image2" />
                </div>
                <div style={useWindowSize().width < 500 ? null : {width:'30%', maxWidth:'400px'}}>
                    <GapLine color="gold" />
                    <h1 style={{color:'gold'}}>콘텐츠</h1>
                    <GapLine color="gold" />
                    <div>
                        <Circle text='Mobile<br />APP' color="gold" />
                    </div>
                    <img src={Content_img} style={{marginTop:'20px'}} alt="content1-Image2" />
                    <div className="d-flex" style={{marginTop:'20px'}}>
                        <div className="flex-grow-1" />
                        <Circle text='눈<br />운동' color="GoldenRod" />
                        <div style={{width:'3px'}}></div>
                        <Circle text='눈<br />힐링' color="Chocolate" />
                        <div style={{width:'3px'}}></div>
                        <Circle text='건강<br />정보' color="DarkRed" />
                        <div className="flex-grow-1" />
                    </div>
                </div>
                <div style={useWindowSize().width < 500 ? null : {width:'30%', maxWidth:'400px'}}>
                    <GapLine color="Indigo" />
                    <h1 style={{color:'Indigo'}}>O2O Service</h1>
                    <GapLine color="Indigo" />
                    {/* <div>
                        <Circle text='Mobile<br />APP' color="Indigo" />
                    </div> */}
                    <img src={O2o_img} style={{marginTop:'20px'}} alt="content1-Image2" />
                    <div className="d-flex" style={{marginTop:'20px'}}>
                        <div className="flex-grow-1" />
                        <Circle text='건강식품<br />판매' color="DarkOliveGreen" />
                        <div style={{width:'3px'}}></div>
                        <Circle text='커뮤니티<br />광고' color="DarkBlue" />
                        <div style={{width:'3px'}}></div>
                        <Circle text='원격<br />진료' color="Indigo" />
                        <div className="flex-grow-1" />
                    </div>
                </div>
                <div className="col" />
            </div>
            
        </div>
    )
}

export default Content