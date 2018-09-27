import React, { Component } from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class CustomizedNavbar extends Component {
    render() {
        return(
            <AppBar position="static" className="nav-bar">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        <Link to="/" className="link-button" >
                            MyReads
                        </Link>
                    </Typography>
                    <div>
                        <Button>
                            <Link to="/search" className="link-button"> 
                                Search 
                            </Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CustomizedNavbar;