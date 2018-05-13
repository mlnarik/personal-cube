import { Easing, Group, Tween } from '@tweenjs/tween.js';
import * as React from "react";
import { PortraitList } from './PortraitList';

export class PageNavWrapper extends React.Component {

    private cube = {rotation: 0};
    private tween: Tween;
    private animationGroup: Group;


    constructor(props: any) {
        super(props);
        this.animationGroup = new Group();
        this.tween = new Tween(this.cube, this.animationGroup).to({rotation: 360}, 1000).easing(Easing.Quintic.InOut);
    }

    public componentDidMount() {
        this.tween.start();
        setInterval(this.animationLoop, 1000/60);
    }

    public render() {
        const style = {
            transform: `rotate(-${this.cube.rotation}deg)`
        };

        return (
        <div className="page-nav">
            <header style={style}>
                <div className="north-nav"><a href="">Portraits</a></div>
                <div className="west-nav"><a href="">Acting</a></div>
                <div className="east-nav"><a href="">Developing</a></div>
                <div className="south-nav"><a href="">Dancing</a></div>
            </header>
            <div className="page-content">
                <PortraitList />
            </div>
        </div>);
    }

    private animationLoop = () => {
        this.animationGroup.update();
        this.setState({});
    }
}