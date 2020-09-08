
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

let rerenrerEntireTree = (state) => {

    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} addPost = {addPost} updateNewPostText={updateNewPostText}/>,
      </React.StrictMode>,
      document.getElementById('root')
    );
    };
rerenrerEntireTree(state);

subscribe(rerenrerEntireTree);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
