import React, {useState, useEffect} from 'react'
import './css.css'

import Image1 from '../assets/backGreen.png'
import Logo from '../assets/VROR_logo.png'
import Back2 from '../assets/back2.png'
import Back3 from '../assets/back3.png'
import Back4 from '../assets/back4.png'
import Back5 from '../assets/back5.png'
import Eyeback from '../assets/eyeback.png'


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
        <div className="sliderSide" style={{height:useWindowSize().height}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{height: "100%"}}>
                <div className="carousel-inner" style={{height:"100%"}}>
                    <div className="carousel-item active" data-interval="50000">
                        <img src={Image1} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{flex:'1'}}></div>
                                <div>
                                    <div style={{fontSize:'28px'}}>쉽고 간편한 눈 건강 체크 솔루션</div>
                                    <img src={Logo} style={{width:useWindowSize().width / 5, padding:'20px'}} />
                                </div>
                                <div style={{flex:'1'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000" style={{backgroundImage:`url(${Eyeback})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back2} className="d-block w-100" alt="img2" style={{height:useWindowSize().height}}  />
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{flex:'1'}}></div>
                                <div style={{display:'flex'}}>
                                    <div style={{flex:'2'}}>
                                    <div style={{fontSize:'32px'}}>"눈은 건강의 척도입니다."</div>
                                    </div>
                                    
                                    <div style={{flex:'1'}} />
                                </div>
                                <div style={{flex:'1'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000" style={{backgroundImage:`url(${Back3})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back2} className="d-block w-100" alt="img2" style={{height:useWindowSize().height}}  />
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{flex:'1'}}></div>
                                <div style={{display:'flex'}}>
                                    <div style={{flex:'2'}}>
                                        <div style={{fontSize:'32px'}}>"쉽고 간편한 눈 건강 관리로 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                        <div style={{fontSize:'32px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;건강한 삶을 지킵니다."</div>
                                    </div>
                                    <div style={{flex:'1'}} />
                                </div>
                                <div style={{flex:'1'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000" style={{backgroundImage:`url(${Back4})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back5} className="d-block w-100" alt="img2" style={{height:useWindowSize().height}}  />
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{flex:'1'}}></div>
                                <div style={{display:'flex'}}>
                                    <div style={{flex:'1'}} />
                                    <div style={{flex:'2'}}>
                                        <div style={{fontSize:'32px'}}>"오늘 우리가 만든느 것이 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                        <div style={{fontSize:'32px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내일의 건강관리를 변화시킬 것 입니다."</div>
                                    </div>
                                </div>
                                <div style={{flex:'1'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" style={{zIndex:'99'}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" style={{zIndex:'99'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Content