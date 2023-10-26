import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const deleteTask = async (id) => {
  const url = "https://653a10dee3b530c8d9e918c8.mockapi.io/task";
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {}
};

const TaskList = ({ task, getTask }) => {
  console.log(task);
  getTask();
  //
  return (
    <div className="p-2">
      {task?.map((item) => {
        const { createdAt, id, task } = item;
        console.log(createdAt);
        return (
          <div
            key={id}
            className="mt-3 d-flex justify-content-between bg-info align-items-center p-2"
          >
            <div className="text-start">
              <h4>{task}</h4>
              <p>{new Date(createdAt).toLocaleDateString("tr-TR")}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                className=" text-warning"
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  fontSize: "3rem",
                  borderRight: "5px solid red",
                  borderBottom: "5px solid red",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
