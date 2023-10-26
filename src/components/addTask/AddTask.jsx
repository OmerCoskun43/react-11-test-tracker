import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(typeof date);
    const newTask = { task, date };
    // console.log(newTask);
    addNewTask(newTask);
    // Form.reset();
    setDate("");
    setTask("");
  };
  getTask();

  const addNewTask = async (newTask) => {
    const url = "https://653a10dee3b530c8d9e918c8.mockapi.io/task";

    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form className="text-start" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 fs-1" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 fs-1" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <div className="text-center">
          <Button
            style={{ textAlign: "center" }}
            size="lg"
            variant="primary w-50"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
