import React, { useEffect, useState } from 'react';
import './App.css';

import Menu from './components/menu'
import Slider from './components/slider5'
import Slider2 from './components/slider7'
import Slider8 from './components/slider8'
import Slider9 from './components/slider9'
import Slider10 from './components/slider10'
import Slider11 from './components/slider11'
import Slider2mobile from './components/slider7mobile'
import Slider8mobile from './components/slider8mobile'
import Slider9mobile from './components/slider9mobile'
import Slider10mobile from './components/slider10mobile'
import Slider11mobile from './components/slider11mobile'
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
      <div className="container-fluid sliderWrap">
        {
          useWindowSize().width > 400 ?
          <Slider />
          :
          <Slider3 />
        }
        
      </div>
      <div className="container-fluid sliderWrap">
      {
          useWindowSize().width > 400 ?
          <div>
            <Slider2 />
            <Slider8 />
            <Slider9 />
            <Slider10 />
            <Slider11 />
          </div>
          :
          <div>
          <Slider2mobile />
          <Slider8mobile />
          <Slider9mobile />
          <Slider10mobile />
          <Slider11mobile />
          </div>
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
