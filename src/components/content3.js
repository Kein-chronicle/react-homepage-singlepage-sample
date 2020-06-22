import React, { useEffect, useState } from 'react'
import CompanyTop from '../assets/company-top.png'
import CompanyBottom from '../assets/company-bottom.png'
import Image2 from '../assets/m2s2.png'
import Image3 from '../assets/m2s3.png'
import Image4 from '../assets/m2s4.png'
import './css.css'

// import m1 from 
// import m2 from 
// import m3 from '../assets/members/m3.png'
// import m4 from '../assets/members/m4.pnt'
// import m5 from '../assets/members/m5.pnt'
// import m6 from '../assets/members/m6.pnt'
// import m7 from '../assets/members/m7.pnt'
// import m8 from '../assets/members/m8.pnt'
// import m9 from '../assets/members/m9.pnt'

import members from '../datas/members'

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

function MemberSet() {
  
  return (
    <div>

    </div>
  )
}

function Content() {


    return (
        <div id="content3" style={{marginBottom:'3rem'}}>
            <div>
                <img style={{width:'100%'}} src={CompanyTop} alt="content1-Image3" />
            </div>
            <div>
              <img style={{width:'340px', padding:'20px'}} src={CompanyBottom} alt="content1-Image3" />
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