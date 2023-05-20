import logo from "./assets/logo.svg"
import TaskContainer from "./components/TaskContainer";
import './App.css';

function App() {
  const currentTime = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric'
  });

  return (
    <div className="App flex justify-center items-center gap-[296px] bg-[#eeeeee]">
      <img srcSet={logo} alt="logo" className="w-[263px] h-[116px]"/>
      <div>
      <div className="container flex justify-end pb-[13px] pr-[28px] h-[202px] w-[430px]">
        <div className="header flex flex-col justify-end text-right text-white">
          <data className="text-lg leading-[22px]">{currentDate}</data>
          <time className="text-5xl leading-[58px]">{currentTime}</time>
        </div>
      </div>
      <TaskContainer currentTime={currentTime}/>
      </div>
    </div>
  );
}

export default App;
