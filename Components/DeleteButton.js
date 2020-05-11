import React, {Component} from 'react';
import '../App.css'

class DeleteButton extends Component {
    render () {
        return (
            <a onClick={this.props.deliverDeleteFunction} href="# " className="delete-button">&#10008;</a>
        )
    }
}

export default DeleteButton;