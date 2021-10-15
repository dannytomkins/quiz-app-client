import Cookies from "js-cookie";
import React from "react";
import { Typography } from "@mui/material";

function WelcomeBanner() {

    return (
        <div>
            <Typography variant = "h2" sx = {{ mb:5, mt: 5}}>
                Welcome to the Quiz App
            </Typography>
        </div>
    )
}

export default WelcomeBanner;
