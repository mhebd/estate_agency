import React from 'react';
import HomeAgentSec from './HomeAgentSec';
import HomeNewsSlider from './HomeNewsSlider';
import HomePropertySlider from './HomePropertySlider';
import HomeService from './HomeService';
import HomeSlider from './HomeSlider';
import HomeTestimonials from './HomeTestimonials';

function Home() {
  return (
    <>
      <HomeSlider />
      <HomeService />
      <HomePropertySlider />
      <HomeAgentSec />
      <HomeNewsSlider />
      <HomeTestimonials />
    </>
  );
}

export default Home;
