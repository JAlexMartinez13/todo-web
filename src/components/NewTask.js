import { Input, Button } from "antd";
import { useState } from "react";

export default function NewTask() {
  const [newTask, setNewTask] = useState('');

  const taskObject = {
    task: newTask
  };

  const handleButtonSubmit = () => {
      fetch('https://much-todo-am.uc.r.appspot.com/tasks', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskObject),
      })
      .then(response => response.json())
      .then(data => console.log('Data was added', data))
      .catch(err => alert(err))
  }

  const handleInputtext = event => {
    setNewTask(event.target.value)
  }
    console.log('newTask state here->>', newTask)

  return (
    <>
        <h2>Add new task:</h2>
        <Input
          placeholder="Enter task"
          onChange={(event) => handleInputtext(event)}
        />
        <button onClick={handleButtonSubmit}> Send new task to API</button>
    </>
  );
}