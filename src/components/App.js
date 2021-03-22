import React, { Component } from "react";
import "../styles/App.css";
import Colorize from "./Color";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="blue-text text-darken-2">Color Palette Generator</h1>
        <Colorize />
      </div>
    );
  }
}

export default App;
