import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';

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
        value: "others",
        desc: "Others"
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
                            <ListItem button onClick={() => this.handleListItemClick(option)} key={option.value}>
                                <ListItemText primary={option.desc} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(CustomizedDialog);