import check from "../assets/check.svg";
import bin from "../assets/bin.svg";
import { useState } from "react";

export default function Task(props) {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <div className="mt-[24px] flex items-center justify-between">
      <div>
        <p className="text-[14px] leading-[22px] capitalize font-medium mb-[5px] ">{props.value}</p>
        <p className="color-[#888888] text-[16px] leading-[17px]">Today at {props.currentTime}</p>
      </div>
      <div className="flex justify-center items-center gap-[18px]">
        <div 
        className={`border-solid rounded-full border-[#20EEB0] border-[2px] w-[20px] h-[20px] flex p-[4px] cursor-pointer
        ${isCheck ? 'bg-[#20EEB0]' : 'bg-[#ffffff]'}`}
         onClick={(event) => {
          if(!isCheck) {
            setIsCheck(true);
          } else {
            setIsCheck(false);
          }
         }}
        >
          <img src={check} alt="check" />
        </div>
        <img  className="h-[20px] w-[20px]" src={bin} alt="bin" 
        onClick={(event) => {
          console.log(event.target.parentNode.parentNode)
          event.target.parentNode.parentNode.remove();
        }}
        />
      </div>
    </div>
  );
}
