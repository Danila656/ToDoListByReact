import React, {Component} from 'react';
import '../App.css'

class AcceptButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverAcceptOrCancelFunction: this.props.deliverAcceptOrCancelFunction
        };
    }

    render () {
        return (
            <a href="# " onClick={this.state.deliverAcceptOrCancelFunction}
               className={this.props.status ? "cancel-button" : "accept-button"}>{this.props.status ? `–` : `✓`}</a>
        )
    }
}

export default AcceptButton;