import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro'); // pomodoro, shortBreak, longBreak
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            // Play sound or notification
            const audio = new Audio('/notification.mp3');
            audio.play();
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    if (mode === 'pomodoro') {
      setMinutes(25);
    } else if (mode === 'shortBreak') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };
  
  const changeMode = (newMode: string) => {
    setIsActive(false);
    setMode(newMode);
    
    if (newMode === 'pomodoro') {
      setMinutes(25);
    } else if (newMode === 'shortBreak') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };
  
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="app-container">
      <div className="pomodoro-app">
        <h1>Pomodoro Timer</h1>
        
        <div className="mode-buttons">
          <button 
            className={mode === 'pomodoro' ? 'active' : ''} 
            onClick={() => changeMode('pomodoro')}>
            Pomodoro
          </button>
          <button 
            className={mode === 'shortBreak' ? 'active' : ''} 
            onClick={() => changeMode('shortBreak')}>
            Short Break
          </button>
          <button 
            className={mode === 'longBreak' ? 'active' : ''} 
            onClick={() => changeMode('longBreak')}>
            Long Break
          </button>
        </div>
        
        <div className="timer-display">
          <span>{formatTime(minutes)}</span>:
          <span>{formatTime(seconds)}</span>
        </div>
        
        <div className="timer-controls">
          <button 
            className="control-button" 
            onClick={toggleTimer}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button 
            className="control-button" 
            onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App