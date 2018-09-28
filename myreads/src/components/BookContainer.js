import React, { Component } from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Typography from '@material-ui/core/Typography';

import CustomizedDialog from './CustomizedDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

class BookContainer extends Component {

    state = {
        open: false,
        selectedValue: emails[1],
    };
    
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };
    
    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {

        const { book } = this.props;

        return (
            <div className="book-container" key={book.id}>
                <GridListTile style={{ width: 250, height: 225 }}>
                    { book.imageLinks && 
                        <img 
                        src={book.imageLinks.thumbnail}
                        alt={book.title} />
                    }
                    <GridListTileBar
                        title={book.title}
                        subtitle={<span>by: {book.authors} </span>}
                        actionIcon={
                            <IconButton 
                                style={{color: 'rgba(255, 255, 255, 0.54)'}}
                                onClick={this.handleClickOpen}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>

                <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
                <br />
                <CustomizedDialog
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

export default BookContainer;