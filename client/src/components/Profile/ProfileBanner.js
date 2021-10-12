import React from "react";
import Cookies from "js-cookie";


function ProfileBanner() {

    return (
        <h1>
            <br />
            {Cookies.get("id") && "Welcome, " + Cookies.get("firstName")}
            {!Cookies.get("id") && "Sign Up and Log In to view this feature!"}
        </h1>
    )
}

export default ProfileBanner;