import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";


    ReactDOM.render(
                <SamuraiJSApp />, document.getElementById('root'));


/*store.subscribe(() => {
    rerenderEntireTree(); убрали, потому что в DialogContainere теперь есть connect и не нужно перерисовывать все дерево. Оно перерисовывается локально
});*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
