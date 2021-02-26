// import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Sweet!</p>
      <Person name="Obito" age="26"/>
      <Person name="Itachi" age="21"/>
      <Person name="Sasuke" age="17">I'm always angry.</Person>
    </div>
  );
}

export default App;
