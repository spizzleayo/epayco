import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp.component";
import Alert from "./components/alert/alert.component";
import "./App.css";
import ConsultWallet from "./pages/ConsultWallet/ConsultWallet.component";
import RechargeWallet from "./pages/ReachargeWallet/RechargeWallet.component";
import Transaction from "./pages/Transaction/Transaction.component";
import Header from "./components/header/Header.component";

function App() {
  return (
    <div>
      <Header/>
      <Alert />
      <Switch>
      <Redirect exact from="/" to="/signup" />
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/wallet">
          <ConsultWallet />
        </Route>
        <Route exact path="/recharge">
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
