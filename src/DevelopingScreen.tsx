import * as React from "react";
import * as vid from './developing/vid.gif';


export const DevelopingScreen = () => {
    return (
        <a href="https://github.com/mlnarik/thoughts" target="_blank">
            <div className="animated fadeIn" style={{height: '100%'}}>
                <img src={vid} style={{height: '100%'}}/>
            </div>
        </a>);
}