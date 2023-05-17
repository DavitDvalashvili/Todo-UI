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
    <div className="App">
      <img srcSet={logo} alt="logo"/>
      <div className="container">
        <div className="header">
          <time>{currentTime}</time>
          <data>{currentDate}</data>
        </div>
      </div>
      <TaskContainer/>
    </div>
  );
}

export default App;
