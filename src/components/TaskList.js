import { List } from 'antd';
import { useEffect, useState } from 'react';
import Task from './Task'

const fakeTasks = [
    { id: 1, task: 'Grow Limes', done: true},
    { id: 2, task: 'Drink Beer', done: true},
    { id: 3, task: 'Buy Wine', done: true},
    { id: 4, task: 'Buy Tequila', done: false},
    { id: 5, task: 'Buy Food', done: false},
]
export default function TaskList(){
    const [tasks, setTasks] = useState(fakeTasks)
    useEffect(()=>{
        fetch('https://much-todo-am.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    })
    return (
        <List 
        bordered
        dataSource={tasks}
        renderItem={item => <Task item={item} />
        }
        />
        
    )
}