import React from 'react'
import Image from '../assets/sample_img.jpg'

function Content() {
    return (
        <div id="constactUs" className="contentSide contactUsSide">
            <div className="row mapSide align-items-center">
                <div className="col">
                    <h1>Map Here</h1>
                </div>
            </div>
            <div className="contactInfo row">
                <div className="col">
                    <h3>Company name</h3><br />
                    Address : 서울특별시 서초구 서초4동 강남대로 465<br />
                    Tel : +82-2-321-4123<br />
                    Bus : 232 Number bus, 강남대로역
                </div>
                <div>
                    <img src={Image} alt="content1-Imagec" />
                </div>
            </div>
        </div>
    )
}

export default Content