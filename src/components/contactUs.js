import React from 'react'
import Image from '../assets/m2s_logo_gray.png'

function Content() {
    return (
        <div id="constactUs" className="container" style={{marginTop:'4rem', marginBottom:'5rem'}}>
            <div className="row mapSide align-items-center">
                <div className="col">
                    <h1>Map Here</h1>
                </div>
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
                    Homepage: <a href="https://m2skorea.com/" target="_blank">https://m2skorea.com</a><br />
                    VROR: <a href="https://www.vror-icare.com/" target="_blank">https://www.vror-icare.com</a>
                </div>
                <div>
                    <img src={Image} alt="content1-Imagec" />
                </div>
            </div>
        </div>
    )
}

export default Content