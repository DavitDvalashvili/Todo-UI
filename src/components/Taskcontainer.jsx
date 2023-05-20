import check from "../assets/check.svg";
import plus from "../assets/plus.svg";
import Task from "./Task";
import { useState } from "react";

export default function TaskContainer(props) {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState("");

  const handleClick = () => {
    if (inputValue !== "") {
      const newTasks = (
        <Task
          key={tasks.length}
          value={inputValue}
          currentTime={props.currentTime}
        />
      );
      setTasks([...tasks, newTasks]);
      setInputValue("");
    }
  };

  return (
    <div className="w-[430px] h-[434px] rounded-b-[10px] bg-white px-[29px] py-[23px]">
      <div className="h-[49px] flex items-center gap-[10px] mb-[12px]">
        <div className="bg-[#EBEFF2] w-[272px] flex items-center gap-[17px] pl-[16px] pt-[14px] pb-[15px]">
          <div className="w-[20px] h-[20px] bg inline-block rounded-full bg-[#20EEB0] p-[6px]">
            <img src={check} alt="check icon" />
          </div>
          <input
            className="h-[20px] bg-[#EBEFF2] focus:outline-none "
            placeholder="Note"
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
        <div
          className="cursor-pointer w-[88px] h-[49px] bg-[#20EEB0] flex justify-center items-center rounded-[5px]"
          onClick={() => {
            handleClick();
          }}
        >
          <img src={plus} className="w-[16px] h-[16px]" alt="plus" />
        </div>
      </div>
      <div className="overflow-y-scroll h-[324px] w-[100%]">
        {tasks}
      </div>
    </div>
  );
}
