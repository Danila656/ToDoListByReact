import React, {Component} from 'react';
import '../App.css';

class DeleteReadyTasksButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverDeleteReadyTasksFunction: this.props.deliverDeleteReadyTasksFunction
        }
    }

    render () {
        return (
            <a href="# " onClick={this.state.deliverDeleteReadyTasksFunction} className="delete-ready-tasks-button">Delete
                ready tasks</a>
        );
    }
}

export default DeleteReadyTasksButton;