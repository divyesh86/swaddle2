import React from "react";
import Accounts from "./pages/Accounts";
import Feed from "./pages/Feed";
import TransactionGrid from "./pages/TransactionGrid"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={TransactionGrid} />
                <Route exact path="/accounts" component={Accounts} />
                <Route exact path="/feed" component={Feed} />
                <Route exact path="/transactions" component={TransactionGrid} />

            </Switch>
        </div>
    </Router>;

export default App;

