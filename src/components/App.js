import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./videos/Home";
import SearchList from "./videos/SearchList";
import Watch from "./videos/Watch";
import Profile from "./videos/Profile";
import history from "../history";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" exact component={SearchList} />
          <Route path="/watch/:id" exact component={Watch} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
