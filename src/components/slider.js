import React, { useEffect, useRef } from 'react'
import './css.css'
import videojs from 'video.js';

import introEye from '../assets/intro_eye.png'
import videoSrc from '../assets/main_video.mp4'


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
            <div data-vjs-player>
                <video ref={playerRef} autoPlay={true} loop={true} className="video-js vjs-16-9" playsInline />
            </div>
            <div className="container">

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
            </div>
            {/* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="img1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image1} className="d-block w-100" alt="img2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image1} className="d-block w-100" alt="img3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
        </div>
    )
}

export default Content