import { List } from 'antd';
import { useState } from 'react';
import Task from './Task'

const fakeTasks = [
    { id: 1, task: 'Grow Limes', done: false},
    { id: 2, task: 'Drink Beer', done: false},
    { id: 3, task: 'Buy Wine', done: false},
    { id: 4, task: 'Buy Tequila', done: false},
    { id: 5, task: 'Buy Food', done: false},
]
export default function TaskList(){
    const [tasks, setTasks] = useState(fakeTasks)
    return (
        <List 
        bordered
        dataSource={tasks}
        renderItem={item => <Task item={item} />
        }
        />
        
    )
}