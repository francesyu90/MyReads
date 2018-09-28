import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {

    render() {
        return (
            <div>
                <SearchIcon />
                <Input 
                    placeholder="Search by title or author" 
                    disableUnderline 
                    onChange = {(event) => this.props.updateQuery(event)}/>
            </div>
        );
    }
}

export default SearchBar;