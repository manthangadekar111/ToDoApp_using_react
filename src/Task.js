import React from 'react';
import './Task.css';

class Task extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
        

        this.state = {
            backgroundColor: ''
        }
    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    

    render(){
        return (
            <div className='task-container'>
                <div className='task-container-background' style={{backgroundColor: this.state.backgroundColor}}>
                    <div className='task-term-container'>
                        <h2 className='task-term'>{this.props.text}</h2>
                    </div>
                    <div className='buttons-container'>
                        <button className='delete-button' onClick={this.removeTask}>x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Task;