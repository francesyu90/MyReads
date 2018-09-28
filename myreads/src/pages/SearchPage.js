import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { Grid } from '@material-ui/core';

class SearchPage extends Component {

    state = {
        query: ''
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value.trim()
        })
    }

    handleClick = (event) => {
        console.log(this.state.query);
    }

    render() {
        return (
            <div className="search-page">
                <Grid container>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <SearchBar updateQuery={this.updateQuery} handleClick={this.handleClick} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SearchPage;