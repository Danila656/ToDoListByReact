import React, {Component} from 'react';
import './App.css';
import UnitWithDeleteButtons from './Components/UnitWithDeleteButtons';
import AddUnit from './Components/AddUnit';
import TaskList from './Components/TaskList';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            arrayWithTasksInfo: [],
        };

        this.createNewTime = this.createNewTime.bind(this);
        this.createNewTask = this.createNewTask.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.checkNameCorrect = this.checkNameCorrect.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.acceptOrCancelTask = this.acceptOrCancelTask.bind(this);
        this.deleteAllTasks = this.deleteAllTasks.bind(this);
        this.deleteReadyTasks = this.deleteReadyTasks.bind(this);
    }

    componentDidMount () {
        this.addTasksToStateAfterRebootPage();
    }

    componentDidUpdate () {
        this.addTasksInfoToLocalStorage();
    }

    deleteTask = (event) => {
        const task = event.target.parentNode.parentNode;
        const arrayWithTasksInfo = this.state.arrayWithTasksInfo;

        arrayWithTasksInfo.forEach(function (item, i) {
            if (Number(task.id) === item.taskId) {
                arrayWithTasksInfo.splice(i, 1);
            }
        })
        this.setState({
            arrayWithTasksInfo: arrayWithTasksInfo,
            valueOfInput: this.state.valueOfInput
        })
    };

    acceptOrCancelTask = (event) => {
        const task = event.target.parentNode.parentNode;
        const arrayWithTasksInfo = this.state.arrayWithTasksInfo;
        arrayWithTasksInfo.forEach(function (item) {
            if (Number(task.id) === item.taskId) {
                item.taskStatus = !item.taskStatus;
            }
        })
        this.setState({
            arrayWithTasksInfo: arrayWithTasksInfo,
            valueOfInput: this.state.valueOfInput
        })
    };

    deleteReadyTasks = () => {
        const arrayWithTasksInfo = this.state.arrayWithTasksInfo;
        let recursion = false;
        arrayWithTasksInfo.forEach(function (item, i) {
            if (item.taskStatus) {
                arrayWithTasksInfo.splice(i, 1);
                recursion = true;
            }
        })
        if (recursion) {
            this.deleteReadyTasks();
        }
        this.setState({
            arrayWithTasksInfo: arrayWithTasksInfo,
            valueOfInput: this.state.valueOfInput,
            textField: this.state.textField
        })
    };

    deleteAllTasks = () => {
        this.setState({
            valueOfInput: this.state.valueOfInput,
            arrayWithTasksInfo: [],
            textField: this.state.textField
        });
    };

    changeInputValue = (event) => {
        if (event.keyCode === 13) {
            this.createNewTask();
        } else {
            this.setState({
                arrayWithTasksInfo: this.state.arrayWithTasksInfo,
                valueOfInput: event.target.value,
                textField: event.target
            });
        }
    };

    createNewTask = () => {
        const addTime = this.createNewTime();
        const taskName = this.state.valueOfInput;
        const taskStatus = false;
        const taskId = +new Date;


        if (this.checkNameCorrect(taskName)) {
            this.state.arrayWithTasksInfo.push({
                addTime: addTime,
                taskName: taskName,
                taskStatus: taskStatus,
                taskId: taskId
            });

            this.state.textField.value = '';

            this.setState({
                arrayWithTasksInfo: this.state.arrayWithTasksInfo,
                textField: this.state.textField
            });
        }
    };

    checkNameCorrect = (name) => {
        let pass = true;

        if (name === '') {
            pass = false;
        }

        if (this.state.arrayWithTasksInfo.length !== 0) {
            this.state.arrayWithTasksInfo.forEach(function (item) {
                if (item.taskName === name) {
                    pass = false
                }
            });
        }

        return pass;
    };

    addTasksToStateAfterRebootPage = () => {
        const arrayFromLocalStorage = JSON.parse(localStorage.getItem('arrayWithTasksInfo'));

        if (arrayFromLocalStorage) {
            this.setState({arrayWithTasksInfo: arrayFromLocalStorage});
        }
    }

    addTasksInfoToLocalStorage = () => {
        localStorage.setItem('arrayWithTasksInfo', JSON.stringify(this.state.arrayWithTasksInfo));
    }

    createNewTime = () => {
        const date = new Date;
        const year = date.getFullYear();
        let month = date.getMonth();
        let dayOfMonth = date.getDate();

        if (month < 10) {
            month += 1;
            month = '0' + month;
        }
        if (dayOfMonth < 10) {
            dayOfMonth = '0' + dayOfMonth;
        }

        return dayOfMonth + '.' + month + '.' + year;
    };


    render () {

        return (
            <div>
                <UnitWithDeleteButtons deliverDeleteReadyTasksFunction={this.deleteReadyTasks}
                                       deliverDeleteAllTasksFunction={this.deleteAllTasks}/>
                <AddUnit valueOfInput={this.state.valueOfInput}
                         deliverInputValue={(event) => this.changeInputValue(event)}
                         deliverFunction={this.createNewTask}/>
                <TaskList deliverDeleteFunction={(event) => this.deleteTask(event)}
                          deliverAcceptOrCancelFunction={(event) => this.acceptOrCancelTask(event)}
                          arrayWithTasksInfo={this.state.arrayWithTasksInfo}/>
            </div>
        );

    }

}

export default App;

