import React from "react";
import AddTask from "../addTask/AddTask";
import TaskList from "../taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://653a10dee3b530c8d9e918c8.mockapi.io/task";
  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Text Bar";
    setText(buttonText);
  };

  //! crud -red

  const getTask = async () => {
    const { data } = await axios(url);

    setTask(data);
    // console.log(data);
    // console.log(data.response.data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <Button
        onClick={() => toggle()}
        variant="danger"
        className="fw-bold"
        size="lg"
        style={{ width: "98%", marginTop: "2rem" }}
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
