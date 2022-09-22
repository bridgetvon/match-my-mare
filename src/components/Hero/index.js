import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent } from './HeroEl';
import Video from '../../Images/horse.mp4';
// import AboutUs from '../About';




const HeroSection = (props) => {
  return (
    <>
      <HeroContainer>
          <HeroBg>
              { props.img !== undefined ? 
              <img src={props.img} alt ="hero "/> : 
              <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            } 
          </HeroBg>
          <HeroContent>
              <HeroText>
                Hello world 
                </HeroText>
                {/* <AboutUs /> */}
          </HeroContent>
      </HeroContainer>
      
      </>

  )
};

export default HeroSection;