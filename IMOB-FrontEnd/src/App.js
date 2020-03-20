import React from 'react';
import './App.css';
import Router from './containers/Router/Router'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {rootReducer} from './reducers'
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary:{
        main: '#fff'
      },
  },
});

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(rootReducer(history), compose(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <div>
        <ThemeProvider theme={theme}>
          <Router history={history}/>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
