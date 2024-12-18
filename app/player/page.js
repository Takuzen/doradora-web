'use client';
import { useRef, useState, useEffect } from 'react';

export default function Player() {
  const audioRef = useRef(null);

  // States for toggle, timer, and alarm
  const [activeTab, setActiveTab] = useState('Timer'); // "Timer" or "Alarm"
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [milliseconds, setMilliseconds] = useState('00');
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  // Play sound function
  const playSound = () => {
    audioRef.current.play();
  };

  const increment = (setter, value, max) => {
    const newValue = Math.min(parseInt(value) + 1, max);
    setter(newValue.toString().padStart(2, '0'));
  };

  const decrement = (setter, value, min) => {
    const newValue = Math.max(parseInt(value) - 1, min);
    setter(newValue.toString().padStart(2, '0'));
  };

  // Timer Effect
  useEffect(() => {
    let timerInterval;
    if (activeTab === 'Timer' && isTimerRunning) {
      timerInterval = setInterval(() => {
        let currentMs = parseInt(milliseconds, 10);
        let currentSeconds = parseInt(seconds, 10);
        let currentMinutes = parseInt(minutes, 10);

        currentMs -= 10; // Countdown milliseconds
        if (currentMs < 0) {
          currentMs = 99;
          currentSeconds -= 1;
        }
        if (currentSeconds < 0) {
          currentSeconds = 59;
          currentMinutes -= 1;
        }
        if (currentMinutes < 0) {
          clearInterval(timerInterval);
          playSound();
          setIsTimerRunning(false);
          return;
        }

        setMilliseconds(currentMs.toString().padStart(2, '0'));
        setSeconds(currentSeconds.toString().padStart(2, '0'));
        setMinutes(currentMinutes.toString().padStart(2, '0'));
      }, 10);
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, milliseconds, seconds, minutes, activeTab]);

  // Alarm Effect
  useEffect(() => {
    const checkAlarm = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
      if (activeTab === 'Alarm' && isAlarmSet && currentTime === alarmTime) {
        playSound();
        setIsAlarmSet(false);
      }
    }, 1000);
    return () => clearInterval(checkAlarm);
  }, [alarmTime, isAlarmSet, activeTab]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '20px',
        fontFamily: "'Hiragino Mincho Pro', serif",
        textAlign: 'center',
      }}
    >
      {/* Top Image */}
      <img
        src="/doradora-gong.png"
        alt="Play Button"
        style={{ cursor: 'pointer', width: '200px', height: '100px', objectFit: 'contain' }}
        onClick={playSound}
      />
      <audio ref={audioRef} src="/TeaDoraSample.m4a" preload="auto" />

      <p>タップして鳴らす</p>


      {/* Divider Line */}
      <hr style={{ width: '80%', borderTop: '1px solid #ccc', margin: '20px 0' }} />

      {/* Toggle Switch */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('Timer')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: activeTab === 'Timer' ? '#333' : '#fff',
            color: activeTab === 'Timer' ? '#fff' : '#000',
            border: '1px solid #333',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          タイマー
        </button>
        <button
          onClick={() => setActiveTab('Alarm')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: activeTab === 'Alarm' ? '#333' : '#fff',
            color: activeTab === 'Alarm' ? '#fff' : '#000',
            border: '1px solid #333',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          アラーム
        </button>
      </div>

      {/* Timer/Alarm Display */}
      {activeTab === 'Timer' ? (
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {/* Minutes Block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button onClick={() => increment(setMinutes, minutes, 59)}>▲</button>
              <input
                type="text"
                value={minutes}
                readOnly
                style={{
                  width: '100px',
                  height: '100px',
                  fontSize: '3rem',
                  background: 'white',
                  color: 'black',
                  textAlign: 'center',
                  border: 'none',
                  outline: 'none',
                }}
              />
              <button onClick={() => decrement(setMinutes, minutes, 0)}>▼</button>
            </div>

            {/* Seconds Block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button onClick={() => increment(setSeconds, seconds, 59)}>▲</button>
              <input
                type="text"
                value={seconds}
                readOnly
                style={{
                  width: '100px',
                  height: '100px',
                  fontSize: '3rem',
                  background: 'white',
                  color: 'black',
                  textAlign: 'center',
                  border: 'none',
                  outline: 'none',
                }}
              />
              <button onClick={() => decrement(setSeconds, seconds, 0)}>▼</button>
            </div>

          </div>

          {/* Start/Stop Button */}
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            style={{
              padding: '10px 40px',
	      margin: '30px 0 0 0',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: isTimerRunning ? '#B22222' : '#006400',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {isTimerRunning ? 'ストップ' : 'スタート'}
          </button>
        </div>
      ) : (
        <div>
  {/* Larger Input Field */}
  <input
    type="time"
    value={alarmTime}
    onChange={(e) => setAlarmTime(e.target.value)}
    style={{
      padding: '20px', // Increased padding
      fontSize: '2rem', // Larger font size
      width: '200px', // Wider input box
      border: '2px solid #333', // Thicker border
      borderRadius: '10px', // More rounded corners
      marginBottom: '20px',
      cursor: 'pointer',
      textAlign: 'center',
    }}
  />

  <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
    時計マークでセット
  </p>

	      <button
            onClick={() => setIsAlarmSet(true)}
            style={{
              padding: '10px 80px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: '#006400',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            保存
          </button>
</div>
      )}
    </div>
  );
}
