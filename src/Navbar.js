import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () =>{

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        React material UI Navbar
                    </Toolbar>
                </AppBar>
            </div>
        )
}
export default NavBar;