import React, {Component} from 'react';
import '../App.css';
import DeleteButton from './DeleteButton';
import AcceptButton from './AcceptButton';

class Task extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverAcceptOrCancelFunction: this.props.deliverAcceptOrCancelFunction,
            deliverDeleteFunction: this.props.deliverDeleteFunction
        }
    };

    render () {
        return (
            <div id={this.props.id} className="task">
                <div className="unit-with-task-info">
                    {this.props.status ?
                        <div className="unit-with-ready-text"><p className="ready-task-name">{this.props.name}</p></div> :
                        <p className="task-name">{this.props.name}</p>}
                    <div>
                        <p className="add-time">{this.props.addTime}</p>
                    </div>
                </div>
                <div className="unit-with-task-buttons">
                    <DeleteButton deliverDeleteFunction={this.state.deliverDeleteFunction}/>
                    <AcceptButton deliverAcceptOrCancelFunction={this.state.deliverAcceptOrCancelFunction}
                                  status={this.props.status}/>
                </div>
            </div>
        )
    }
}

export default Task;