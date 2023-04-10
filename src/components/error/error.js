import React, {Component} from "react";

export default class Error extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooopsssss....</h1>
        }
        return this.props.children;
    }
}
