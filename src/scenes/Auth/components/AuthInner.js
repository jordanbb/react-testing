import React from "react";

const AuthInner = (props) => {
    return (
        <div className="auth-inner-container">
            <div className="auth-inner">
                <div className="auth-branding-container">
                    <div className="auth-logo">BLUEIQ</div>
                </div>
                <div className="auth-scenes">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default AuthInner;