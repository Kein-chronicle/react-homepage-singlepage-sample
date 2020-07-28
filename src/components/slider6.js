import React, {useState, useEffect} from 'react'
import './css.css'

import Image1 from '../assets/page5.png'
import Logo from '../assets/VROR_logo.png'
import Back2 from '../assets/page6.png'
import Back3 from '../assets/page7.png'
import Back4 from '../assets/page8.png'
import Back5 from '../assets/page9.png'
import Eyeback from '../assets/eyeback.png'


import Back from '../assets/back.png'
import Next from '../assets/next.png'
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
        <div id="slider2" className="sliderSide2">
            <div id="carouselExampleCaptions2" className="carousel slide" data-ride="carousel" style={{height: "100%"}}>
                <div className="carousel-inner" style={{height:"100%"}}>
                    <div className="carousel-item active" data-interval="50000">
                        <img src={Image1} className="d-block w-100" alt="img1"/>
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000">
                        <img src={Back2} className="d-block w-100" alt="img2" />
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000">
                        <img src={Back3} className="d-block w-100" alt="img2"/>
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000">
                        <img src={Back4} className="d-block w-100" alt="img2"/>
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="50000">
                        <img src={Back5} className="d-block w-100" alt="img2"/>
                        <div className="carousel-caption d-none d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions2" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions2" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions2" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions2" data-slide-to="4"></li>
                </ol>
                <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev" style={{zIndex:'99'}}>
                    <img src={Back} style={{width:'60px'}} />
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next" style={{zIndex:'99'}}>
                    <img src={Next} style={{width:'60px'}} />
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span> */}
                </a>
            </div>
        </div>
    )
}

export default Content