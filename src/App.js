import React from 'react';
import logo from './logo.svg';
import './App.css';
import itemsStore from './Mobx/ItemsStore';
import {LoginPage, ListPage} from './routes';
import {history,PrivateRoute} from './helpers';
import { Switch, Route, Router } from 'react-router';
import {Navbar, Copyright} from './common';

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Main/>
      </Switch>
      </Router>
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
    </div>
  );
}

const Main = () => (
    <main>
      <Switch>
        <Route exact path="/signIn" component={LoginPage} />
        <PrivateRoute path="/" component={wrappedRoutes} />
      </Switch>
    </main>
);

const wrappedRoutes = () => (
  <Switch>
    <Navbar/>
    <PrivateRoute path="/list" children={<ListPage store={itemsStore}/>} />
  <Copyright/>
  </Switch>
)


export default App;
