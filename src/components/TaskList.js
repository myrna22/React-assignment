import React, { Component } from 'react'
import TaskItem from './TaskItem'
import {FiEdit3} from 'react-icons/fi'
import {FaExchangeAlt} from 'react-icons/fa'

export default class TaskList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th> <FiEdit3 /> Task</th>
                        <th> <FaExchangeAlt/> Change</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => (
                        <TaskItem 
                        key={index} 
                        taskItem={task} 
                        id={index}
                        deleteTask={this.props.deleteTask}
                        editTask={this.props.editTask}
                        toggleTask={this.props.toggleTask} />
                    ))}
                </tbody>
            </table>
        )
    }
}
