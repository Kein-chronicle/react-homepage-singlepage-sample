import React, { useEffect, useState } from 'react';
import './App.css';

import Menu from './components/menu'
import Slider from './components/slider5'
import Slider2 from './components/slider6'
import Slider3 from './components/mobile/slider3'
import Slider4 from './components/mobile/slider4'
import Intro from './components/intro'

import Content1 from './components/content1'
import Content2 from './components/content2'
// import Content3 from './components/content3'

import Content4 from './components/mobile/content4'
import Content5 from './components/mobile/content5'

import ContactUs from './components/contactUs'

import Footer from './components/footer'

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

function App() {
  return (
    <div className="App" style={{wordBreak:'keep-all'}}>
      <div style={{width: useWindowSize().width, height:useWindowSize().height }} className="container-fluid sliderWrap">
        {
          useWindowSize().width > 400 ?
          <Slider />
          :
          <Slider3 />
        }
        
      </div>
      <div style={{width: useWindowSize().width, height:useWindowSize().height }} className="container-fluid sliderWrap">
      {
          useWindowSize().width > 400 ?
          <Slider2 />
          :
          <Slider4 />
        }
      </div>
      <Menu />
      <div className="contentWrap">
        {/* <Intro /> */}
        {useWindowSize().width > 400 ?
          <Content1 />
          :
          <Content4 />
        }
        {useWindowSize().width > 400 ?
          <Content2 />
          :
          <Content5 />
        }
        
        {/* <Content3 />
        <ContactUs /> */}
      </div>
      {/* <div className="container-fluid footerWrap">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
