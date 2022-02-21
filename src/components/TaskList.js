import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    fetch("https://much-todo-am.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);

  return (
    <List
      bordered
      size="large"
      dataSource={tasks}
      renderItem={(item) => <Task item={item} setTasks={setTasks}/>}
    />
  );
}
