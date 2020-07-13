import React from "react";
import { observer } from "mobx-react";
import logo from "./logo.svg";
import "./App.css";
import getStore from "./store/store";
import addTodo from "./store/actions";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getStore().todos}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => {
            addTodo("hi!");
          }}
        />
        <p> testing code</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default observer(App);
