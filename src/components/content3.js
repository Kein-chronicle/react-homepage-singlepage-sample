import React, { useEffect, useState } from 'react'
import Image from '../assets/m2s1.png'
import Image2 from '../assets/m2s2.png'
import Image3 from '../assets/m2s3.png'
import Image4 from '../assets/m2s4.png'
import './css.css'


// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
        console.log(window.innerWidth);
        
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

    return (
        <div id="content3" style={{marginBottom:'3rem'}}>
            <div>
                <img style={{width:'100%'}} src={Image} alt="content1-Image3" />
            </div>
            <div className="container">
                <div className={useWindowSize().width > 500 ? "row" : null}>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image2} />
                    </div>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image3} />
                    </div>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content