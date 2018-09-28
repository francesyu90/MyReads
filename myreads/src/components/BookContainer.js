import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class BookContainer extends Component {

    render() {
        return (
            <div className="book-container">
                <GridListTile style={{ width: 250, height: 225 }}>
                    <img 
                        src="https://material-ui.com/static/images/grid-list/breakfast.jpg" 
                        alt="Hello World" />
                    <GridListTileBar
                        title="Hello World"
                        subtitle={<span>by: "Hello World" </span>}
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