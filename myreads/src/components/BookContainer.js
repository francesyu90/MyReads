import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class BookContainer extends Component {

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
                            <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            </div>
        );
    }
}

export default BookContainer;