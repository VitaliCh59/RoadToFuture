import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
