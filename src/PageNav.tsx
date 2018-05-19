import { Easing, Group, Tween } from '@tweenjs/tween.js';
import * as React from "react";
import { ActingScreen } from './ActingScreen';
import { DancingScreen } from './DancingScreen';
import { DevelopingScreen } from './DevelopingScreen';
import { PortraitScreen } from './PortraitScreen';

enum ScreenMode {
    Portrait,
    Acting,
    Dancing,
    Developing
}



export class PageNavWrapper extends React.Component {

    private screenMode: ScreenMode = ScreenMode.Dancing;
    private cube = {rotation: -720};
    private animationGroup: Group;
    private showContent = false;
    private carouselSettings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 500,
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
      }


    constructor(props: any) {
        super(props);
        this.animationGroup = new Group();
    }

    public componentDidMount() {
        this.showPortrait();
        setInterval(this.animationLoop, 1000/60);
    }

    public render() {
        const style = {
            transform: `rotate(${this.cube.rotation}deg)`
        };

        return (
        <div className="page-nav">
            <header style={style}>
                <div className="north-nav" onClick={this.showPortrait}>Portraits</div>
                <div className="west-nav" onClick={this.showActing}>Acting</div>
                <div className="east-nav" onClick={this.showDeveloping}>Developing</div>
                <div className="south-nav" onClick={this.showDancing}>Dancing</div>
            </header>
            <div className="page-content">
                {this.showContent && this.screenMode === ScreenMode.Portrait ? <PortraitScreen settings={this.carouselSettings} /> : null}
                {this.showContent && this.screenMode === ScreenMode.Acting ? <ActingScreen settings={this.carouselSettings} /> : null}
                {this.showContent && this.screenMode === ScreenMode.Dancing ? <DancingScreen /> : null}
                {this.showContent && this.screenMode === ScreenMode.Developing ? <DevelopingScreen /> : null}
            </div>
        </div>);
    }

    private animationLoop = () => {
        this.animationGroup.update();
        this.setState({});
    }

    private showPortrait = () => {
        this.screenMode = ScreenMode.Portrait;
        this.setRotationTo(0);
    }

    private showActing = () => {
        this.screenMode = ScreenMode.Acting;
        this.setRotationTo(90);
    }

    private showDancing = () => {
        this.screenMode = ScreenMode.Dancing;
        this.setRotationTo(180);
    }

    private showDeveloping = () => {
        this.screenMode = ScreenMode.Developing;
        this.setRotationTo(270);
    }


    private setRotationTo = (rotateTo: number): void => {
        this.showContent = false;
        new Tween(this.cube, this.animationGroup)
            .to({rotation: rotateTo}, 1000)
            .easing(Easing.Quintic.InOut)
            .onComplete(() => {this.showContent = true;})
            .start();
    }
}