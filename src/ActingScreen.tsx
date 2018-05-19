import * as React from 'react';
import Slider from 'react-slick';
import * as acting1 from './acting/1.jpg';
import * as acting2 from './acting/2.jpg';
import * as acting3 from './acting/3.jpg';

export const ActingScreen = (props: {settings: any}) => {

    return (
      <div className="animated fadeIn" style={{height: '100%'}}>
      <Slider {...props.settings} className="slider-images animated fadeIn">
        <div>
          <img src={acting1} />
        </div>
        <div>
          <img src={acting2} />
        </div>
        <div>
          <img src={acting3} />
        </div>
      </Slider></div>);
  }