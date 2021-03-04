import { render } from "@testing-library/react";
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Obito", age: 26},
      {name: "Itachi", age: 21},
      {name: "Sasuke", age: 17}
    ],
    otherState: "Some other Uchiha"
  }

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // this.state.persons[0].name = "Kakashi"; DON"T DO THIS!
    this.setState({
      persons: [
        {name: "Kakashi", age: 26},
        {name: "Shisui", age: 21},
        {name: "Sasuke", age: 17}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>Sweet!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I'm always angry.</Person>
      </div>
  );
}

export default App;
