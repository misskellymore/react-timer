import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

 useEffect(() => {
    console.log('first render', seconds);

    if(isRunning){
      const id = window.setInterval(() => {
        console.log('tick', seconds)
        setSeconds(seconds => seconds + 1);
      }, 1000);

      setIntervalId(id);

    } else {

      window.clearInterval(intervalId);

    }   

  }, [isRunning]);


  console.log('seconds', seconds);

  return (
    <div className="app">
      <div className='time-circle'>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div className="buttons">
        <button className="play-pause" onClick = {() => {
           setIsRunning(true)
        }}>
          <i className="fa fa-play fa-2x" />
        </button>
        <button className="play-pause" onClick = {() => {
          setIsRunning(false)
        }}>
          <i className="fa fa-pause fa-2x" />
        </button>
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
