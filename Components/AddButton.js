import React, {Component} from 'react';
import '../App.css';

class AddButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            functionForDeliver: props.deliverFunction
        }
    }

    render () {
        return (
            <a href="# " onClick={this.state.functionForDeliver} className="add-button">Add</a>
        );
    }
}

export default AddButton