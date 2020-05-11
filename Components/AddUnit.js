import React, {Component} from 'react';
import '../App.css';
import TaskNameWriter from "./TaskNameWriter";
import AddButton from "./AddButton";

class AddUnit extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deliverNewTask: props.deliverFunction,
            deliverInputValue: props.deliverInputValue,
            valueOfInput: props.valueOfInput
        };
    }

    render () {
        return (
            <div>
                <TaskNameWriter valueOfInput={this.state.valueOfInput}
                                deliverInputValue={this.state.deliverInputValue}/>
                <AddButton deliverFunction={this.state.deliverNewTask}/>
            </div>
        );

    }
}

export default AddUnit;