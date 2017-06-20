import React from "react";
import Login from "scenes/Auth/scenes/Login";
import ForgotUsername from "scenes/Auth/scenes/ForgotUsername";
import ResetPassword from "scenes/Auth/scenes/ResetPassword";
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
                    <Route path="/forgot-username" component={ForgotUsername} />
                    <Route path="/reset-password" component={ResetPassword} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
