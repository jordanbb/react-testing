import React from "react";
import Login from "scenes/Auth/scenes/Login";
import Home from "scenes/Home";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

class App extends React.Component {
    render() {

        const loggedIn = false;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        loggedIn ? (
                            <Redirect to="/home"/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
