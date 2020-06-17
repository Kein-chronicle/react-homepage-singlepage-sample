import React from 'react'
import Image from '../assets/sample_img.jpg'
import './css.css'

function Content() {
    return (
        <div id="content2" className="contentSide contentSideWhite">
            <div>
                <img src={Image} alt="content1-Image2" />
            </div>

            <div>
                <h1>Content2 Title</h1>
                <br />
                This is content section.<br />
                If you want to say anything,<br />
                you can insert something to here
            </div>
            
        </div>
    )
}

export default Content