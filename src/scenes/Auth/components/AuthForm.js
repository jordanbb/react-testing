import React from "react";
import PropTypes from "prop-types";

const AuthForm = props => {
    return (
        <form className="auth-form">
            <h1>{props.formTitle}</h1>
            {props.children}
        </form>
    )
};

AuthForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
};

export default AuthForm;