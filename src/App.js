import React, { useState, useEffect } from 'react';
import './App.css';
import Controlled from './components/Controlled';
import UnControlled from './components/UnControlled';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#FCEADE"); // Warna latar belakang peach
  const [controlledValue, setControlledValue] = useState('');
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  const reset = () => {
    setBackgroundColor("#FCEADE"); // Kembali ke warna latar belakang awal
    setControlledValue('');
    setUncontrolledValue('');
  };

  const handleControlledChange = (value) => {
    setControlledValue(value);
  };

  const handleUnControlledChange = (value) => {
    setUncontrolledValue(value);
  };

  const formatText = (text) => {
    // Mengubah teks menjadi Markdown untuk pemformatan sederhana
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor, fontFamily: 'Poppins, sans-serif' }}>
      <div className="header">
        <h1 className="title" style={{ color: '#FF6B6B' }}>Selamat Datang di Handling Event in React ^-^</h1>
        <small className="datetime" style={{ color: '#333333' }}>{currentDateTime}</small>
      </div>
      <hr />
      <div className="section">
        <h2 style={{ color: '#FF6B6B' }}>Tugas W11S03</h2>
        <p style={{ color: '#333333' }}>Hijau Hijau Hijau!</p>
        <Controlled value={formatText(controlledValue)} onChange={handleControlledChange} />
      </div>
      <hr />
      <div className="section">
        <h2 style={{ color: '#FF6B6B' }}>Pikiran Mahasiswa Sudah Pusing</h2>
        <p style={{ color: '#333333' }}>Mahasiswa mengerjakannya dengan perjuangan huhuhu!</p>
        <UnControlled value={formatText(uncontrolledValue)} onChange={handleUnControlledChange} />
      </div>
      <hr />
      <div className="buttons">
        <button className="btn" onClick={changeBackgroundColor} style={{ backgroundColor: '#FF6B6B', color: '#FFFFFF' }}>Ubah Warna Latar</button>
        <button className="btn" onClick={reset} style={{ backgroundColor: '#FF6B6B', color: '#FFFFFF' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
