import * as React from 'react';
import * as vid from './dancing/vid.mp4';

export const DancingScreen = () => {
    return(<video src={vid} autoPlay={true} muted={false} style={{width: '100%', height: '100%'}}/>);
}