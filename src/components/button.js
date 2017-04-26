import React from "react";
import PropTypes from "prop-types";

const Button = props => {
    return (
        <button>{props.buttonText}</button>
    )
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
};

export default Button;