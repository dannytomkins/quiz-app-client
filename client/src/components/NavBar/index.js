import React  from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

function NavBar() {

      function deleteAll() {
        Cookies.remove("id");
        Cookies.remove("firstName");
        Cookies.remove("lastName");
        window.location.reload();
        return false;
      }

    return (
        <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs>
                <Tab
                    label = "Quiz App"
                    component = {Link}
                    to = "/"
                    >
                Quiz App
                </Tab>

                <Tab
                    label = "Profile"
                    component = {Link}
                    to = "/profile"
                >
                    Profile
                </Tab>

                <Tab
                    label = "Generate"
                    component = {Link}
                    to = "/generate"
                >
                    Generate Quiz
                </Tab>

                {!Cookies.get("id") && <Tab
                    label = "Register"
                    component = {Link}
                    to = "/register"
                    >
                Sign-Up
                </Tab>}

                {!Cookies.get("id") && <Tab
                    label = "Log In"
                    component = {Link}
                    to = "/login"
                >
                    Log In
                </Tab>}
                
                {Cookies.get("id") && <Tab
                label = "Log Out"
                component = {Link}
                to = "/"
                onClick = {() => deleteAll()}
                >
                </Tab>}


            </Tabs>
        </Box>

        </div>);


              {/* {Cookies.get("id") &&<NavLink 
              to = "/search"
              className = "nav-link"
              >
                Search
              </NavLink>} */}
              
              {/* <NavLink 
              to = "/profile"
              className = "nav-link"
              >
                Profile
              </NavLink> */}


              {/* <NavLink 
              to = "/leaderboard"
              className = "nav-link"
              >
                Leaderboard
              </NavLink> */}
              
            //   {!Cookies.get("id") && <NavLink 
            //   to = "/Login"
            //   className = "nav-link"
            //   >
            //     Login
            //   </NavLink>}

}
  
export default NavBar;