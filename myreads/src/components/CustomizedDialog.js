import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';

const emails = ['username@gmail.com', 'user02@gmail.com'];
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
                        {emails.map(email => (
                            <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItem>
                        ))}
                            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="add account" />
                            </ListItem>
                    </List>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(CustomizedDialog);