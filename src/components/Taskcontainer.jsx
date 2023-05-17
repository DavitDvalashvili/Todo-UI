import check from "../assets/check.svg";
import bin from "../assets/bin.svg";
import plus from "../assets/plus.svg";
import { useState } from "react";
import "./TaskContainer.css";

export default function TaskContainer(props) {
  const [inputValue, setInputValue] = useState("");
  const [addTask, setAddTask] = useState(false);
  const newTasks  = [2, 3, 10, 50];
  
  return (
    <div className="inputBox">
      <div>
        <div className="checkBox">
          <img src={check} alt="check icon" />
        </div>
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <div
        className="addTask"
        onClick={(event) => {
          if(inputValue != "") {
            newTasks.unshift(<p>svlaa</p>);
            console.log(newTasks)
            //etInputValue("")
          }
        }}
      >
        <img src={plus} alt="plus" />
      </div>
      {newTasks.map((task, index) => (
        <p key={index}>Content: {task}</p>
      ))}
    </div>
  );
}
