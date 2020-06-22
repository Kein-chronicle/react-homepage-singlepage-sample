import React, { useEffect, useState } from 'react';
import './App.css';

import Menu from './components/menu'
import Slider from './components/slider'
import Intro from './components/intro'

import Content1 from './components/content1'
import Content2 from './components/content2'
import Content3 from './components/content3'

import ContactUs from './components/contactUs'

import Footer from './components/footer'

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

function App() {
  return (
    <div className="App" style={{wordBreak:'keep-all'}}>
      <div className="container-md menuWrap fixed-top">
        <Menu />
      </div>
      <div style={{marginTop: useWindowSize().width < 500 ? "198px" : "110px"}} className="container-fluid sliderWrap">
        <Slider />
      </div>
      <div className="contentWrap">
        <Intro />
        <Content1 />
        <Content2 />
        <Content3 />
        <ContactUs />
      </div>
      <div className="container-fluid footerWrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
