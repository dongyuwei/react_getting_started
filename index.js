import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from './src/hello_message'

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="world" />, mountNode);
