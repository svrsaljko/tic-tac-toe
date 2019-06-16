import React from "react";
import "./App.css";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div className="App">
      <Header />
      <TicTacToe />
    </div>
  );
}

export default App;
