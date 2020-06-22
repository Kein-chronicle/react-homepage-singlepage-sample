import React, { useEffect, useState } from 'react'
import CompanyTop from '../assets/company-top.png'
import CompanyBottom from '../assets/company-bottom.png'
import Image2 from '../assets/m2s2.png'
import Image3 from '../assets/m2s3.png'
import Image4 from '../assets/m2s4.png'
import './css.css'

import members from '../datas/members'

// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
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

function MemberSet({item}) {
  const profile = item.profile
  const title = item.title
  const name = item.name
  const [historys, setHistory] = useState([])
  useEffect(()=>{
    var arr = []
    for (let i = 0; i < item.history.length; i++) {
      const history = item.history[i];
      arr.push(<div>{history}</div>)
    }
    setHistory(arr)
  }, [])
  

  return (
    <div className="d-flex text-left" style={{padding:'10px'}}>
      <div style={{marginRight:'10px'}}>
        <img src={profile} style={{width:'120px', height:'120px'}} />
      </div>
      <div className="flex-grow-1">
        <div style={{fontWeight:'bolder', paddingBottom:'8px'}}>
          {title} {name}
        </div>
        <div style={{fontSize:'10px', lineHeight:'20px', color:'gray'}}>
          {historys}
        </div>
      </div>
    </div>
  )
}

function MemberViewWrap() {

  const [membersView1, setMembersView1] = useState([])
  const [membersView2, setMembersView2] = useState([])
  const [membersView3, setMembersView3] = useState([])

  useEffect(()=>{
    var member1 = []
    var member2 = []
    var member3 = []

    for (let i = 0; i < members.length; i++) {
      const item = members[i];
      var member = <MemberSet item={item} />
      if (i <= 2) {
        member1.push(member)
      } else if (i <= 5) {
        member2.push(member)
      } else {
        member3.push(member)
      }
    }

    setMembersView1(member1)
    setMembersView2(member2)
    setMembersView3(member3)

  }, [])
  
  return (
    <div className={useWindowSize().width > 500 ? "row" : null}>
      <div className="col" />
      <div>
        {membersView1}
      </div>
      <div>
        {membersView2}
      </div>
      <div>
        {membersView3}
      </div>
      <div className="col" />
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
              <MemberViewWrap />
                {/* <div className={useWindowSize().width > 500 ? "row" : null}>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image2} />
                    </div>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image3} />
                    </div>
                    <div className="col">
                        <img style={{width:'100%'}} src={Image4} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Content