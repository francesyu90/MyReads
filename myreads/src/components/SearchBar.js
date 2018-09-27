import React, { Component } from 'react';

import { Input } from '@material-ui/core';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <Input placeholder="Search..." disableUnderline />
            </div>
        );
    }
}

export default SearchBar;