import * as React from 'react';
import Slider from 'react-slick';
import * as portrait1 from './portraits/a1.png';
import * as portrait2 from './portraits/a2.png';
import * as portrait3 from './portraits/a3.png';
import * as portrait4 from './portraits/a4.png';
import * as portrait5 from './portraits/b1.png';
import * as portrait6 from './portraits/b2.png';
import * as portrait7 from './portraits/b3.png';

export const PortraitList = () => {
    const settings = {
      arrows: true,
      autoplay: true,
      centerMode: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    }
    return (
      <Slider {...settings} className="slider-images">
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
      </Slider>);
  }