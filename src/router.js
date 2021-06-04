import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ToDoApp from "./ToDoApp.js";
import User from "./User.js";
export default class RouterTask extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ToDoApp />
      </React.Fragment>
    );
  }
}
