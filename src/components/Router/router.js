import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    Redirect
} from "react-router-dom";
import Header from "../Header";


export default function RouterComponent() {
    let width = window.innerWidth;
    return (
        <Router>
            <Switch>
                <Route exact path="/Header">
                    <Header/>
                </Route>
            </Switch>
        </Router>
    )
}