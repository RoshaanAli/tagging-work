import React from "react";
import ReactDOM from "react-dom";
// import * as ReactDOM from "react-dom/client"
import "./index.css";
import App from "./App";
import TaggingScreen from './taggingScreen'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
<React.StrictMode>
  <TaggingScreen />
</React.StrictMode>
,
  document.getElementById('root')
);

// This opts into the new behavior!
// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
