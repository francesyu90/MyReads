import React, { Component } from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class CustomizedNavbar extends Component {
    render() {
        return(
            <AppBar position="static" className="nav-bar">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        MyReads
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CustomizedNavbar;