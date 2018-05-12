import * as React from "react";

export class PageNavWrapper extends React.Component {

    constructor(props: any) {
        super(props);

    }

    public render() {
    return (
        <div>
            <header className="page-nav">
                <div className="north-nav"><a href="">Portraits</a></div>
                <div className="west-nav"><a href="">Acting</a></div>
                <div className="east-nav"><a href="">Developing</a></div>
                <div className="south-nav"><a href="">Dancing</a></div>
            </header>
            <div className="page-content">
                {this.props.children}
            </div>
        </div>);
    }
}