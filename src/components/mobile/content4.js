import React, {useState, useEffect} from 'react'
import System1 from '../../assets/system1.png'
import System2 from '../../assets/system2.png'
import './../css.css'


import Image1 from '../../assets/backGreen.png'
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
    return (
        <div id="content1" style={{backgroundImage:`url(${Image1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="container">
              <div style={{display:'flex'}}>
                <div style={{width:'5px', height:"60px", backgroundColor:'rgba(255,255,255,0.2)', marginTop:'50px'}}></div>
                <div style={{width:'10px'}}></div>
                <div style={{textAlign:'left', paddingTop:'50px', color:'rgba(255,255,255,0.4)', fontSize:'25px'}}>고객센터</div>
              </div>
              <div style={{marginTop:'40px', textAlign:'left', paddingLeft:'30px', fontSize:'28px', color:'white'}}>
                <div>
                  문의하기
                </div>
                <div style={{width:'120px'}}></div>
                <div style={{felx:'4',display:'flex', flexDirection:'column', height:'120px', color:'rgba(255,255,255,0.5)', fontSize:'20px'}}>
                  <div style={{flex:'1'}}></div>
                  <div>
                    대표전화 : 031-8017-0418
                    <br />
                    대표메일: m2s@m2skorea.com
                  </div>
                </div>
                <div style={{flex:'3'}}></div>
              </div>
              <div style={{backgroundColor:"rgba(255,255,255,0.4)", height:'2px', marginTop:'50px'}}></div>
              <div style={{marginTop:'40px', textAlign:'left', paddingLeft:'30px', fontSize:'28px', color:'white'}}>
                <div>
                  회원관리
                </div>
                <div style={{flex:'1'}}></div>
                <div style={{display:'flex', flexDirection:'column', height:'120px', color:'rgba(255,255,255,0.5)', fontSize:'20px'}}>
                  <div style={{flex:'1'}}></div>
                  <div>
                    {/* 대표전화 : 031-8017-0418
                    <br />
                    대표메일: m2s@m2skorea.com */}
                  </div>
                </div>
                <div style={{flex:'3'}}></div>
              </div>
              <div style={{backgroundColor:"rgba(255,255,255,0.4)", height:'2px', marginTop:'50px'}}></div>
              <div style={{marginTop:'40px', textAlign:'left', paddingLeft:'30px', fontSize:'28px', color:'white', paddingBottom:'200px'}}>
                <div>
                  프레스 센터
                </div>
                <div style={{width:'120px'}}></div>
                <div style={{felx:'4',display:'flex', flexDirection:'column', height:'120px', color:'rgba(255,255,255,0.5)', fontSize:'20px'}}>
                  <div style={{flex:'1'}}></div>
                  <div>
                    보도자료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:'white'}}>&#62;</span>
                    <br />
                    새소식&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:'white'}}>&#62;</span>
                  </div>
                </div>
                <div style={{flex:'3'}}></div>
              </div>
            </div>
        </div>
    )
}

export default Content