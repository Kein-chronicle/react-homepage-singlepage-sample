import React, { useEffect, useRef, useState } from 'react'
import './css.css'
import videojs from 'video.js';

import introEye from '../assets/intro_eye.png'
import videoSrc from '../assets/main_video.mp4'

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
    const playerRef = useRef();

    useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: true }, () => {
        player.src(videoSrc);
    });

    return () => {
        player.dispose();
    };
    }, []);
    return (
        <div className="sliderSide">
            <div className="d-flex" style={{backgroundColor:'gray'}}>
                <div className="flex-grow-1" />
                <div data-vjs-player style={{display:useWindowSize().width < 500 ? 'none' : 'block', maxWidth:'1800px'}}>
                    <video ref={playerRef} autoPlay={true} loop={true} className="video-js vjs-16-9" playsInline />
                </div>
                <div className="flex-grow-1" />
            </div>
            {
                useWindowSize().width < 500 ?
                <img style={{width:"100%"}} src={introEye} />
                : null
            }
            <div className="container">
            {
                useWindowSize().width > 500 ?
                <div className="introDesignPage row"
                    style={{
                        backgroundImage:`url(${introEye})`,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'right',
                        backgroundSize:'auto 100%'
                    }}
                >
                    <div className="introDesignPageText col-7 align-self-center">
                        <div className="introDesignPageTextDes">
                            VR로 쉽고 간편한 건강 체크 솔루션 제공
                        </div>
                        <h2>"눈은 건강의 indicator"</h2>
                        <div className="row">
                            <div className="col"></div>
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    안과
                                </div>
                            </div>
                            {/* <div className="col"></div> */}
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    이빈후과
                                </div>
                            </div>
                            {/* <div className="col"></div> */}
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    신경과
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
                :
                <div className="introDesignPageMobile">
                    <div className="introDesignPageText" style={{marginTop:'3rem'}}>
                        <div className="introDesignPageTextDes">
                            VR로 쉽고 간편한 건강 체크 솔루션 제공
                        </div>
                        <h2>"눈은 건강의 indicator"</h2>
                        <div className="d-flex">
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    안과
                                </div>
                            </div>
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    이빈후과
                                </div>
                            </div>
                            <div className="introItem row">
                                <div className="col align-self-center">
                                    신경과
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            }
            </div>
        </div>
    )
}

export default Content