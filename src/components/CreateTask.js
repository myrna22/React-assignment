import React, { Component } from 'react'
import {FcDownLeft} from 'react-icons/fc'

export default class CreateTask extends Component {
    constructor(props) {
        super (props);
        this.state = {
            task: '',
        };
    }
    handleChange = (event) => {
        this.setState({task: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault ();
        this.props.createTask(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder='Enter Task'
                value={this.state.task} 
                onChange={this.handleChange} 
                autoFocus />
                <button className='add' type='submit'>
                    < FcDownLeft />
                    Add</button>
            </form>
        )
    }
}
