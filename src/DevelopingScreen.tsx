import * as React from "react";
import * as vid from './developing/vid.gif';


export const DevelopingScreen = () => {
    return (
        <div className="animated fadeIn" style={{height: '100%'}}>
            <img src={vid} />
        </div>);
}