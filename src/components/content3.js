import React from 'react'
import Image from '../assets/sample_img.jpg'
import './css.css'

function Content() {
    return (
        <div id="content3" className="contentSide contentSideGray">
            <div className="row">
                <div>
                    <img src={Image} alt="content1-Image3" />
                </div>
                <div className="col">
                    <h1>Content1 Title</h1>
                    <br />
                    This is content section.<br />
                    If you want to say anything,<br />
                    you can insert something to here
                </div>
            </div>
        </div>
    )
}

export default Content