import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi', likesCount: 1 },
  { id: 2, message: 'Go', likesCount: 100 }
]

let dialogs = [
  { id: 1, name: 'Artem' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Alex' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Bye' },
  { id: 3, message: 'Goodbye' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
