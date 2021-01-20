import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "../Todos/Todos";

const App = () => (
  <div className="app">
    <div className="container">
      <Header />
      <div className="row">
        <Router>
          <NavBar />
          <div className="col-9 app__content">
            <Switch>
              <Route exact path="/">
                <div>Home</div>
              </Route>
              <Route path="/todos">
                <Todos/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  </div>
);
export default App;
