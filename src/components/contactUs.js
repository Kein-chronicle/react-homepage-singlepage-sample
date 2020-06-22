import React from 'react'
import Map from '../assets/m2smap.png'
import Image from '../assets/m2s_logo_gray.png'

function Content() {
    return (
        <div id="constactUs" className="container" style={{marginTop:'4rem', marginBottom:'5rem'}}>
            <div className="mapSide">
                <a rel="noopener noreferrer" href="https://www.google.co.kr/maps/place/LH+%ED%8C%90%EA%B5%90%EC%A0%9C2%ED%85%8C%ED%81%AC%EB%85%B8%EB%B0%B8%EB%A6%AC+%EA%B8%B0%EC%97%85%EC%84%B1%EC%9E%A5%EC%84%BC%ED%84%B0/@37.4107232,127.0804501,14.27z/data=!4m5!3m4!1s0x357ca7f3e2b4c2a5:0xe25bd0c77871ffd!8m2!3d37.4106752!4d127.0953089?hl=ko" target="_blank">
                <img src={Map} style={{width:"100%", height:"100%"}} />
                </a>
                
                {/* <div className="col">
                    <img src={Map} style={{width:"100%", height:"100%"}} />

                </div> */}
            </div>
            <div className="contactInfo row">
                <div className="col">
                    <h3>M2S+</h3><br />
                    Address<br />
                    경기도 성남시 수정구 창업로 54 기업성장센터 3층 323, 324호 / 8층 822호 (우)13449<br />
                    3F 323, 54, Changeop-ro,Sujeong-gu,Seongnam-si,Gyeonggi-do, Repubic of Korea<br /><br />
                    Tel: +82-31-8017-0418<br />
                    Fax: +82-31-8017-0419<br />
                    E-mail: m2s@m2skorea.com<br /><br />
                    Homepage: <a rel="noopener noreferrer" href="https://m2skorea.com/" target="_blank">https://m2skorea.com</a><br />
                    VROR: <a rel="noopener noreferrer" href="https://www.vror-icare.com/" target="_blank">https://www.vror-icare.com</a>
                </div>
                <div>
                    <img src={Image} alt="content1-Imagec" />
                </div>
            </div>
        </div>
    )
}

export default Content