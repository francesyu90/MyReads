import React, { Component } from 'react';

import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

class SearchBar extends Component {

    render() {

        const { updateQuery, handleClick } = this.props;

        return (
            <div>
                <Input 
                    placeholder="Search by title or author" 
                    disableUnderline 
                    onChange = {(event) => updateQuery(event)} 
                />
                <IconButton onClick={(event) => handleClick(event)}>
                    <SearchIcon />
                </IconButton>
            </div>
        );
    }
}

export default SearchBar;