import React from 'react'
import System1 from '../assets/system1.png'
import System2 from '../assets/system2.png'
import './css.css'

function Content() {
    return (
        <div id="content1" className="contentSide contentSideGray" style={{paddingTop:'5rem', paddingBottom:'5rem'}}>
            <div className="container">

                <div className="row">
                    <div style={{textAlign:'center', marginBottom:'2rem'}}>
                        <img src={System1} alt="content1-Image3" /><br />
                        <img src={System2} alt="content1-Image3" />
                    </div>
                    <div className="col systemIntro" style={{minWidth:'300px'}}>
                        <h1>
                            VR HMD 영상 자극에 의한 <br />
                            눈의 움직임을 분석하는 검사 알고리즘 <br />
                            이를 이용한 정확한 검진결과 도출 <br />
                        </h1>
                        <h4>VR Tech + Eye Tracking</h4>
                        Eye tracking sensor에서 도출된 생체데이터를 분석 <br />
                        고려대학교 의료원과 안과,신경과 검사 알고리즘개발 <br /><br />

                        <h4>검사 결과의 디지털化</h4>
                        과학적 계측방법을 통한 일관적이고 신뢰성 있는 검진 결과 구현 <br />
                        아날로그 검진기기 및 고부가가치 장비(시야검사기) 대체 <br /><br />

                        <h4>축적된 Data를 활용한 질환 상태 예측 및 분석 A.I</h4>
                        의료진 요구사항 반영한 DB형태 구축하여 시계열적 분석 <br />
                        Big Data 활용하여 질환 발병 가능성 등 예방 의학에 활용<br /><br />

                        <h4>적극적 검사 참여 유도를 위한 Fun 검사 프로토콜 적용</h4>
                        가상의 검사 공간 내 재미있는 영상 제공하여 적극적 검사참여 유도<br />
                        헬스케어 시장으로 확대
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content