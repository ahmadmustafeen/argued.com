import React from "react";
import { theme } from "../../constants/theme";

import './style.css'



const WelcomeModal = props => {
    return (
        <div className="WelcomeModal">
            <div className="WelcomeModal-header">
                <h3 style={{ color: theme.fontColor.whiteText }}>
                    Thanks for Signing Up
                </h3>
            </div>
            <div className="WelcomeModal-body">
                <p style={{ color: theme.fontColor.whiteText }}>
                    Please Check your email for verification link, Check spam folder is email is not present
                </p>
            </div>
        </div>
    )

}


export { WelcomeModal }