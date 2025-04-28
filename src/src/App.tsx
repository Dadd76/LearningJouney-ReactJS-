import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import  Hello from './HelloFunction/Hello'; 
import  HelloComp from './HelloComponent/Hello'; // Importation du composant Hello
import ProjectsPage from './Project/ProjectPage';
import HelloCompWithState from './HelloComponentWithState/Hello';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello name="World" /> {/* Utilisation du composant Hello */}
      <Hello name="David" enthusiasmLevel={3}></Hello>
      <HelloComp name="Robert" enthusiasmLevel={3}></HelloComp>
      <HelloCompWithState name="David" enthusiasmLevel={3}></HelloCompWithState>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="container">
        <ProjectsPage />
      </div>
    </div>
  );

}

export default App;
