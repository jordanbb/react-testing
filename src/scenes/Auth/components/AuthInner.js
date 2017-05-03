import React from "react";
import BIQLogoText from "components/icons/BIQLogoText"

const AuthInner = (props) => {
    return (
        <div className="auth-inner-container">
            <div className="auth-inner">
                <div className="auth-branding-container">
                    <div className="auth-logo">
                        <BIQLogoText />
                    </div>
                </div>
                <hr />
                <div className="auth-scenes">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default AuthInner;