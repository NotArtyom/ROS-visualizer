import React from 'react';
import './App.css';
import { HelpPage, ListPage, LoginPage, TurtleBotPage } from './routes';
import { history, PrivateRoute } from './helpers';
import { Route, Router, Switch } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

function App () {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={ store }>
      <div className="App">
        <Router history={ history }>
          <div>
            <Main/>
          </div>
        </Router>
        {/*  <img src={logo} className="App-logo" alt="logo" />*/ }
      </div>
    </Provider>
  );
}

const Main = () => (
  <main>
    <Switch>
      <Route path="/signIn" exact component={ LoginPage }/>
      <PrivateRoute path="/" exact component={ ListPage }/>
      <PrivateRoute path="/turtle" exact component={ TurtleBotPage }/>
      <PrivateRoute path="/help" exact component={ HelpPage }/>
      {/*<Route path='/images' component={() => {*/}
      {/*window.location.port= '0.0.0.0:8080';*/}
      {/*return null;*/}
    }}/>
    </Switch>
  </main>
);

export default App;
