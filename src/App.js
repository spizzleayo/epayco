import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Alert from "./components/alert/alert.component";
import "./App.css";
import ConsultWallet from "./pages/ConsultWallet/ConsultWallet.component";

function App() {
  return (
    <div>
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/wallet">
          <ConsultWallet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
