import React, {Component} from 'react';
import '../App.css';

class TaskNameWriter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverValueInput: props.deliverInputValue,
        }
    }

    render () {
        return (
            <input onKeyUp={this.state.deliverValueInput}/>
        );
    }
}

export default TaskNameWriter;