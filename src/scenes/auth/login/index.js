import React from "react";
import Button from "components/Button";
import Heading from "components/Heading";

class Login extends React.Component {
    render(){
        return (
            <div>
                <h1>Hey This is the login scene</h1>
                <Button buttonText="New Button Text" />
                <Heading/>
            </div>
        )
    }
}

export default Login;
