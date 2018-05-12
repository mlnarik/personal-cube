import * as React from 'react';
import * as portrait1 from './portraits/a1.png';
import * as portrait2 from './portraits/a2.png';
import * as portrait3 from './portraits/a3.png';
import * as portrait4 from './portraits/a4.png';
import * as portrait5 from './portraits/b1.png';
import * as portrait6 from './portraits/b2.png';
import * as portrait7 from './portraits/b3.png';

export const PortraitList = () => {
    return (<div>
      <img className="animated fadeIn" src={portrait1} />
      <img className="animated fadeIn" src={portrait2} />
      <img className="animated fadeIn" src={portrait3} />
      <img className="animated fadeIn" src={portrait4} />
      <img className="animated fadeIn" src={portrait5} />
      <img className="animated fadeIn" src={portrait6} />
      <img className="animated fadeIn" src={portrait7} />
      </div>);
  }