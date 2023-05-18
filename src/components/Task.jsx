import check from "../assets/check.svg";
import bin from "../assets/bin.svg";

export default function Task(props) {
  return (
    <div className="newTaskBox">
      <div className="textBox">
      <p>{props.value}</p>
        <p>Today at {props.currentTime}</p>
      </div>
      <div className="iconBox">
        <div className="checkBox">
          <img src={check} alt="check" />
        </div>
        <img src={bin} alt="bin" 
        onClick={(event) => {
          console.log(event.target.parentNode.parentNode)
          event.target.parentNode.parentNode.remove();
        }}
        />
      </div>
    </div>
  );
}
