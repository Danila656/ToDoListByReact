import React, {Component} from 'react';
import '../App.css';

class DeleteAllTasksButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverDeleteAllTasksFunction: this.props.deliverDeleteAllTasksFunction
        }
    }

    render () {
        return (
            <a href="# " onClick={this.state.deliverDeleteAllTasksFunction} className="delete-all-tasks-button">Delete
                all tasks</a>
        );
    }
}

export default DeleteAllTasksButton;