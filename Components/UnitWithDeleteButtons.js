import React, {Component} from 'react';
import '../App.css';
import DeleteAllTasksButton from './DeleteAllTasksButton';
import DeleteReadyTasksButton from './DeleteReadyTasksButton';

class UnitWithDeleteButtons extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverDeleteReadyTasksFunction: props.deliverDeleteReadyTasksFunction,
            deliverDeleteAllTasksFunction: props.deliverDeleteAllTasksFunction,
        }
    }

    render () {
        return (
            <div className="unit-with-delete-buttons">
                <DeleteAllTasksButton deliverDeleteAllTasksFunction={this.state.deliverDeleteAllTasksFunction}/>
                <DeleteReadyTasksButton deliverDeleteReadyTasksFunction={this.state.deliverDeleteReadyTasksFunction}/>
            </div>
        )
    }
}

export default UnitWithDeleteButtons;