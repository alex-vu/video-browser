import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Navigation from "./template/Navigation";
import MainContent from "./resusable/MainContent";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="offset-top">
      <HashRouter>
        <div style={{ display: "flex" }}>
          <Navigation />
          <MainContent>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/results/:value" exact component={SearchList} />
              <Route path="/watch/:id" render={(props) => (
                <Watch key={window.location.href} {...props} />)
              } />
              <Route path="/profile/:id" exact component={Profile} />
            </Switch>
          </MainContent>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
