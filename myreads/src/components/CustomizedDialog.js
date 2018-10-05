import React, { Component } from 'react';

import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

const options = [
    {
        value: "currentlyReading",
        desc: "Currently Reading"
    },
    {
        value: "wantToRead",
        desc: "Want to Read"
    },
    {
        value: "read",
        desc: "Read"
    },
    {
        value: "none",
        desc: "None"
    },
];

class CustomizedDialog extends Component {

    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };
    
    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {

        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">Move to ...</DialogTitle>
                <div>
                    <List>
                        {options.map(option => (
                            <MenuItem 
                                key={option.value} 
                                selected={option.value === selectedValue? true : false}
                                onClick={() => this.handleListItemClick(option)}
                            >
                                {option.desc}
                            </MenuItem>
                        ))}
                    </List>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(CustomizedDialog);