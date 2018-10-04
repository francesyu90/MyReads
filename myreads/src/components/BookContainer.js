import React, { Component } from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import * as BooksAPI from '../api/BooksAPI';

import CustomizedDialog from './CustomizedDialog';

class BookContainer extends Component {

    state = {
        open: false,
        selectedValue: this.props.book.shelf,
    };
    
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };
    
    handleClose = value => {
        if(value) {
            this.setState({ selectedValue: value.value, open: false });
        }  
    };

    updateShelf = book => {
        
        const { selectedValue } = this.state;

        const shelfToBeUpdated = selectedValue !== "" ? selectedValue : undefined;

        if (book.shelf !== shelfToBeUpdated) {
            BooksAPI.update(book, shelfToBeUpdated).then(res => {
                if (res) {
                    window.location.reload();
                }
            });
        }
    }

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

                <CustomizedDialog
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />

                {this.updateShelf(book)}
            </div>
        );
    }
}

export default BookContainer;