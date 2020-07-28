import React, {useState, useEffect} from 'react'
import System1 from '../../assets/system1.png'
import System2 from '../../assets/system2.png'
import './../css.css'


import Image1 from '../../assets/back14.png'

import CompanyTop from '../../assets/company-top.png'
import CompanyBottom from '../../assets/company-bottom.png'

import members from '../../datas/members'


function MemberSet({item}) {
  const profile = item.profile
  const title = item.title
  const name = item.name
  const [historys, setHistory] = useState([])
  useEffect(()=>{
    var arr = []
    for (let i = 0; i < item.history.length; i++) {
      const history = item.history[i];
      arr.push(<div key={i+"history"}>{history}</div>)
    }
    setHistory(arr)
  }, [])
  

  return (
    <div className="d-flex text-left" style={{padding:'10px'}}>
      <div style={{marginRight:'10px'}}>
        <img src={profile} style={{width:'120px', height:'120px'}} />
      </div>
      <div className="flex-grow-1">
        <div style={{fontWeight:'bolder', paddingBottom:'8px', color:'white'}}>
          {title} {name}
        </div>
        <div style={{fontSize:'10px', lineHeight:'20px', color:'rgba(255,255,255,0.8)'}}>
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
      var member = <MemberSet item={item} index={i} key={i+"wrap"} />
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
// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : 0,
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
        <div id="content2" style={{backgroundImage:`url(${Image1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="container">
              <div style={{display:'flex'}}>
                <div style={{width:'5px', height:"60px", backgroundColor:'rgba(255,255,255,0.2)', marginTop:'50px'}}></div>
                <div style={{width:'10px'}}></div>
                <div style={{textAlign:'left', paddingTop:'50px', color:'rgba(255,255,255,0.4)', fontSize:'25px'}}>회사소개</div>
              </div>
              <div style={{textAlign:'left', marginTop:'100px', marginLeft:'10px', color:'rgba(255,255,255,0.6)'}}>
                  <h1 style={{color:'white'}}>엠투에스는</h1>
                  창의적이고 놀라운 VR과 AR, 디지털 콘텐츠 <br />
                  제작능력을 보유하고 잇는 기업입니다.<br />
                  VR, AR기술력을 엔터테인먼트에 머무르지 않고 의료와 디지털 헬스케어 분야에 적용하며<br />
                  남들과는 다른 길을 개척해나가고 있습니다.<br />
              </div>
              <div style={{height:'1px', marginTop:'200px', backgroundColor:'rgba(255,255,255,0.6)'}}></div>
              <div style={{textAlign:'left', marginTop:'100px', marginLeft:'10px', color:'rgba(255,255,255,0.6)'}}>
                  본사: 경기도 성남시 수정구 창업로54 기업성장센터 3층 323<br />
                  R/D: 경기도 성남시 수정구 창업로54 기업성장센터 8층 822<br />
                  대표전화: 031-8017-0418<br />
              </div>
              <div style={{height:'1px', marginTop:'100px', backgroundColor:'rgba(255,255,255,0.6)'}}></div>
              <div style={{marginTop:'150px', paddingBottom:'150px'}}>
                  <div style={{textAlign:'left', color:'rgba(255,255,255,0.9)', fontSize:'30px', marginLeft:'10px', paddingBottom:'30px'}}>엠투에스의 구성원들 모두 주인공이자 회사 미래입니다.</div>
                <MemberViewWrap />
              </div>
            </div>
        </div>
    )
}

export default Content