import React  from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

function NavBar() {

    //   function deleteAll() {
    //     Cookies.remove("id");
    //     Cookies.remove("name");
    //     Cookies.remove("last_name");
    //   }

    return (
        <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs>
                <Tab
                    label = "Register"
                    component = {Link}
                    to = "/register"
                    >
                Sign-Up
                </Tab>

                <Tab
                    label = "Log In"
                    component = {Link}
                    to = "/login"
                >
                    Log In
                </Tab>

                <Tab
                    label = "Generate"
                    component = {Link}
                    to = "/generate"
                >
                    Generate Quiz
                </Tab>
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
            //   {Cookies.get("id") && <NavLink to = "/buildQuiz" className = "nav-link"
            // //    onClick = {() => deleteAll()}
            //    >
            //        Logout</NavLink>} 

}
  
export default NavBar;