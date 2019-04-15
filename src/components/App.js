import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./template/Header";
import Sidebar from "./template/Sidebar";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import history from "../history";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results/:value" exact component={SearchList} />
          <Route path="/watch/:id" exact component={Watch} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
