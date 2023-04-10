import React , {Component} from "react";

export default class Scroll extends Component {
    render(children = this.props.children) {
        return (
            <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
                {children}
            </div>
        );
    }
}
