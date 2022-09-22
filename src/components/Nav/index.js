import React from 'react';
import { Nav, Bars, NavMenu, NavLink } from './NavBarEl';
import "./nav.css";

const Navbar = ({ toggle }) => {
    // const loggedIn = Auth.loggedIn();
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };
    return (
        <>
            <Nav className="navbar-Nav">
                <NavLink to="/">
                    <div className="navbar-div">
                        <h2>Mare Match</h2>
                    </div>
                </NavLink>
                <Bars onClick={toggle} />
                <nav className="text-center">
                    <NavMenu>
                            <>
                                <Bars onClick={toggle} />
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                                <NavLink to="/match">
                                    Find a Match
                                </NavLink>
                                {/* <a id="logout" href="/">
                                    Logout
                                </a> */}
                                <NavLink to="/logout">
                                    Logout
                                </NavLink>
                            </>
                    </NavMenu>
                </nav>

                {/* <NavBtn>
          <Button to='/login' primary='true'>
              Login
          </Button>
      </NavBtn> */}
            </Nav>
        </>
    );
}


export default Navbar;