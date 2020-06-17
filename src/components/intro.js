import React from 'react'
import Image from '../assets/sample_img.jpg'
import './css.css'

function Content() {
    return (
        <div id="intro" className="contentSide introSide">
            <div>
                <img src={Image} alt="intro-image2" />
            </div>
            <div>
                <h1>Hello!</h1>
            </div>
            <div>
                <h5>
                    Welcome to Company<br />
                    We prepare company infomation for you.<br />
                    If you get some company infomation,<br />
                    Scroll down & look contents.<br /><br />
                    Thank you.
                </h5>
            </div>
        </div>
    )
}

export default Content