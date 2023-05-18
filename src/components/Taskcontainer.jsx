import check from "../assets/check.svg";
import plus from "../assets/plus.svg";
import Task from "./Task";
import { useState } from "react";
import "./TaskContainer.css";

export default function TaskContainer(props) {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState("");

  const handleClick = () => {
    if(inputValue !== ""){
      const newTasks = <Task key={tasks.length} value={inputValue} currentTime={props.currentTime}/>
      setTasks([...tasks, newTasks]);
      setInputValue("")
    }
  };


  return (
    <div className="inputBox">
      <div>
        <div className="checkBox">
          <img src={check} alt="check icon" />
        </div>
        <input type="text" 
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        />
      </div>
      <div
        className="addTask"
        onClick={() => {
          handleClick()
        }}
      >
        <img src={plus} alt="plus" />
      </div>
      {tasks}
    </div>
  );
}



