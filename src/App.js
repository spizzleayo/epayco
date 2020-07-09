import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Alert from "./components/alert/alert.component";
import "./App.css";
import ConsultWallet from "./pages/ConsultWallet/ConsultWallet.component";
import RechargeWallet from "./pages/ReachargeWallet/RechargeWallet.component";
import Transaction from "./pages/Transaction/Transaction.component";

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
        <Route exact path="/wallet/recharge">
          <RechargeWallet />
        </Route>
        <Route exact path="/pay">
          <Transaction />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
