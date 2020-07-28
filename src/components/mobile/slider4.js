import React, {useState, useEffect} from 'react'

import Brain from '../../assets/brain.png'
import Logo from '../../assets/VROR_logo.png'
import Back6 from '../../assets/back6.png'
import Back8 from '../../assets/back17.png'
import Back9 from '../../assets/back18.png'
import Back10 from '../../assets/back19.png'
import Back11 from '../../assets/back11.png'
import Back12 from '../../assets/back20.png'
import Eyedocpro from '../../assets/eyedocpro.png'
import Eyedoclite from '../../assets/back21.png'
import Eyedoclitelogo from '../../assets/eyedoclitelogo.png'


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
        <div id="slider2" className="sliderSide" style={{height:useWindowSize().height}} data-ride="false" >
            <div id="carouselExampleCaptions2" className="carousel slide" data-ride="carousel" style={{height: "100%"}} data-ride="false" data-interval="5000000">
                <div className="carousel-inner" style={{height:"100%"}}>
                    <div className="carousel-item active" data-interval="5000000" style={{backgroundImage:`url(${Back8})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back6} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{height:'50px'}}></div>
                                <div style={{flex:'1', display:'flex'}}>
                                    <div style={{width:'50px'}}></div>
                                    <div style={{backgroundColor:'rgba(255,255,255,0.2)', width:'80px', height:'80px', display:'inline-block', display:"flex", flexDirection:'column', borderRadius:'40px', border:'1px solid white'}}>
                                        <div style={{flex:"1"}}></div>
                                        <div>의료기기</div>
                                        <div style={{flex:"1"}}></div>
                                    </div>
                                    <div style={{width:'20px'}}></div>
                                    <div>
                                        <div style={{height:'30px'}}></div>
                                        <div style={{fontSize:'30px'}}>시신경계</div>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div style={{fontSize:'28px'}}>VR(가상현실)을<br />이용한 새로운 개념의<br />안과 검사기</div>
                                    
                                    <div>
                                        <img src={Logo} style={{width:useWindowSize().width / 3 * 2, padding:'20px'}} />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div style={{flex:'1'}}></div>
                                        <div style={{fontWeight:'bolder', fontSize:'40px'}}>
                                            7IN1
                                        </div>
                                    </div>
                                </div>
                                <div style={{flex:'1'}}></div>
                                <div style={{textAlign:'center', paddingBottom:'40px', fontSize:'12px', color:'rgba(255,255,255,0.8)'}}>
                                    7가지 안과검사(시야검사, 동공검사, 외안근검사<br />, 랑카스터검사, 입체시검사, 회선검사, 사시각검사)<br />
                                    식품의학안전처&#60;차세대의료기기&#62;선정<br />
                                    미국 FDA 인증(Device number D362543)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000000" style={{backgroundImage:`url(${Back9})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back6} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{height:'50px'}}></div>
                                <div style={{flex:'1', display:'flex'}}>
                                    <div style={{width:'50px'}}></div>
                                    <div style={{backgroundColor:'rgba(255,255,255,0.2)', width:'80px', height:'80px', display:'inline-block', display:"flex", flexDirection:'column', borderRadius:'40px', border:'1px solid white'}}>
                                        <div style={{flex:"1"}}></div>
                                        <div>의료기기</div>
                                        <div style={{flex:"1"}}></div>
                                    </div>
                                    <div style={{width:'20px'}}></div>
                                    <div>
                                        <div style={{height:'30px'}}></div>
                                        <div style={{fontSize:'30px'}}>전정신경계</div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{display:'flex'}}>
                                        <div style={{flex:'1'}}></div>
                                            <div style={{fontSize:'28px'}}>VR을 이용한 안진 검사기</div>
                                        <div style={{flex:'1'}}></div>
                                    </div>
                                    
                                    <div style={{display:'flex'}}>
                                        <div style={{flex:'1'}}></div>
                                        <div>
                                            {/* <img src={Logo} style={{width:useWindowSize().width / 5, padding:'20px'}} /> */}
                                        </div>
                                        <div style={{display:'flex', flexDirection:'column'}}>
                                            <div style={{fontWeight:'bolder', fontSize:'5rem'}}>
                                                VRVNG
                                            </div>
                                        </div>
                                        <div style={{flex:'1'}}></div>
                                    </div>
                                </div>
                                <div style={{flex:'1'}}></div>
                                <div style={{textAlign:'center', paddingBottom:'40px', fontSize:'12px', color:'rgba(255,255,255,0.8)'}}>
                                    어지럼증을 유발하는 전정 질환 검사(시추적검사, 시운동성 안진검사)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000000" style={{backgroundImage:`url(${Back10})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back6} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{height:'50px'}}></div>
                                <div style={{flex:'1', display:'flex'}}>
                                    <div style={{width:'50px'}}></div>
                                    <div style={{backgroundColor:'rgba(255,255,255,0.2)', width:'80px', height:'80px', display:'inline-block', display:"flex", flexDirection:'column', borderRadius:'40px', border:'1px solid white'}}>
                                        <div style={{flex:"1"}}></div>
                                        <div>의료기기</div>
                                        <div style={{flex:"1"}}></div>
                                    </div>
                                    <div style={{width:'20px'}}></div>
                                    <div>
                                        <div style={{height:'30px'}}></div>
                                        <div style={{fontSize:'30px'}}>뇌신경계</div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{display:'flex'}}>
                                        <div style={{flex:'1'}}></div>
                                            <div style={{fontSize:'28px'}}>뇌병변 진단 및<br />맞춤형 재활치료기</div>
                                        <div style={{flex:'1'}}></div>
                                    </div>
                                    <div>
                                        <img src={Brain} style={{width:'150px', padding:'20px'}} />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        
                                        <div style={{flex:'1'}}></div>
                                        <div style={{fontWeight:'bolder', fontSize:'5rem', height:'90px'}}>
                                            NDI-150
                                        </div>
                                        <div style={{fontSize:'21px'}}>
                                            NeuroDiagnosticInstrument 150
                                        </div>
                                        <div style={{flex:'2'}}></div>
                                    </div>
                                </div>
                                <div style={{flex:'1'}}></div>
                                <div style={{textAlign:'center', paddingBottom:'40px', fontSize:'12px', color:'rgba(255,255,255,0.8)'}}>
                                    VR Wearable Device 형태의 혁신적인 뇌 질환 진단 도구<br />
                                    안구운동추적 및 시야측정기술을 통해 뇌졸증,<br />뇌경색, 뇌종양, 등의 징후를 미리 파악(골든 타임 확보)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000000" style={{backgroundImage:`url(${Back12})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back11} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{height:'50px'}}></div>
                                <div style={{flex:'1', display:'flex'}}>
                                    <div style={{width:'50px'}}></div>
                                    <div style={{backgroundColor:'rgba(255,255,255,0.05)', width:'80px', height:'80px', display:'inline-block', display:"flex", flexDirection:'column', borderRadius:'40px', border:'1px solid white'}}>
                                        <div style={{flex:"1"}}></div>
                                        <div>헬스케어</div>
                                        <div style={{flex:"1"}}></div>
                                    </div>
                                    <div style={{width:'20px'}}></div>
                                    <div>
                                        <div style={{height:'30px'}}></div>
                                        <div style={{fontSize:'30px'}}>아이닥 프로</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={Eyedocpro} style={{width:useWindowSize().width / 3 * 2, padding:'20px'}} />
                                </div>
                                <div style={{flex:'1'}}></div>
                                <div style={{textAlign:'center', paddingBottom:'40px', fontSize:'12px', color:'rgba(255,255,255,0.8)'}}>
                                    전문 안과검사기 수준의 정확한 측정결과<br />
                                    AI문진에 따른 자동측정 추천<br />
                                    개인에 맞춘 측정결과 이력제공
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000000" style={{backgroundImage:`url(${Eyedoclite})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <img src={Back11} className="d-block w-100" alt="img1" style={{height:useWindowSize().height}} />
                        <div className="carousel-caption d-md-block" style={{right:'0px', left:'0px',width:'100%',height:'100%',bottom:'0px', top:'0px'}}>
                            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
                                <div style={{height:'50px'}}></div>
                                <div style={{flex:'1', display:'flex'}}>
                                    <div style={{width:'50px'}}></div>
                                    <div style={{backgroundColor:'rgba(255,255,255,0.05)', width:'80px', height:'80px', display:'inline-block', display:"flex", flexDirection:'column', borderRadius:'40px', border:'1px solid white'}}>
                                        <div style={{flex:"1"}}></div>
                                        <div>헬스케어</div>
                                        <div style={{flex:"1"}}></div>
                                    </div>
                                    <div style={{width:'20px'}}></div>
                                    <div>
                                        <div style={{height:'30px'}}></div>
                                        <div style={{fontSize:'30px'}}>아이닥 라이트</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={Eyedoclitelogo} style={{width:useWindowSize().width / 3 * 2, padding:'20px'}} />
                                </div>
                                <div style={{flex:'1'}}></div>
                                <div style={{textAlign:'center', paddingBottom:'40px', fontSize:'12px', color:'rgba(255,255,255,0.8)'}}>
                                    전문 안과검사기 수준의 정확한 측정결과<br />
                                    AI문진에 따른 자동측정 추천<br />
                                    개인에 맞춘 측정결과 이력제공
                                </div>
                            </div>
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
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next" style={{zIndex:'99'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Content