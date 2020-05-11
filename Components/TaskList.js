import React, {Component} from 'react';
import '../App.css';
import Task from './Task';

class TaskList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverAcceptOrCancelFunction: this.props.deliverAcceptOrCancelFunction,
            deliverDeleteFunction: this.props.deliverDeleteFunction
        };
    }

    render () {
        return (
            <div className="task-list">
                {this.props.arrayWithTasksInfo.map((item) =>
                    <Task key={item.taskId}
                          deliverDeleteFunction={this.state.deliverDeleteFunction}
                          deliverAcceptOrCancelFunction={this.state.deliverAcceptOrCancelFunction}
                          name={item.taskName}
                          id={item.taskId}
                          status={item.taskStatus}
                          addTime={item.addTime}/>
                )}
            </div>
        );
    }
}

export default TaskList;