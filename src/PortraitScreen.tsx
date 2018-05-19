import * as React from 'react';
import Slider from 'react-slick';
import * as portrait1 from './portraits/1.png';
import * as portrait2 from './portraits/2.png';
import * as portrait3 from './portraits/3.jpg';
import * as portrait4 from './portraits/4.png';
import * as portrait5 from './portraits/5.jpg';
import * as portrait6 from './portraits/6.png';
import * as portrait7 from './portraits/7.jpg';
import * as portrait8 from './portraits/8.jpg';

export const PortraitScreen = (props: {settings: any}) => {

    return (
      <div style={{height: '100%'}}>
      <Slider {...props.settings} className="slider-images animated fadeIn">
        <div>
          <img className="animated fadeIn" src={portrait1} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait2} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait3} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait4} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait5} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait6} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait7} />
        </div>
        <div>
          <img className="animated fadeIn" src={portrait8} />
        </div>
      </Slider></div>);
  }