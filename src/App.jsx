import React, { useRef, useState } from 'react';
import './TimerBox.css';

const App = () => {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleFocusBox = () => {
    inputRef.current?.focus();
  };

  const startTimer = () => {
    if (timerRef.current) return; // Avoid multiple timers
    setIsTimeUp(false);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeLeft(10);
    setIsTimeUp(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">Magical Timer & Input Box</h1>
      <div className="input-container">
        <input ref={inputRef} className="text-box" placeholder="Type something..." autoFocus />
        <button className="button" onClick={handleFocusBox}>
          Focus Box
        </button>
      </div>
      <div className="timer-container">
        <div className="timer-display">
          {isTimeUp ? <span className="time-up">Time’s Up!</span> : <span>{timeLeft}</span>}
        </div>
        <div className="timer-buttons">
          <button className="button" onClick={startTimer}>
            Start Timer
          </button>
          <button className="button" onClick={stopTimer}>
            Stop Timer
          </button>
          <button className="button" onClick={resetTimer}>
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;