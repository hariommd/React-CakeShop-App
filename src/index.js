import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import myStore from "./reduxstore/store"
import axios from "axios"

export var authenticator = axios.create()

authenticator.interceptors.request.use((request)=>{
  request.headers["authtoken"] = localStorage.getItem('userToken')
  return request
})



ReactDOM.render(
  
  <Provider store={myStore}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
