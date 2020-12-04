import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
      );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
