import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import BillingCycle from "./components/billyngCycle/BillingCycle";

const Routes = (props) => (

    <Router>
        
            <Switch>
                <Route path="/">
                    <Dashboard />
                </Route>
                <Route path="/billingCycle">
                    <BillingCycle />
                </Route>
               
                <Redirect from="*" to= "/"/>
            </Switch>
        
    </Router>


)
export default Routes