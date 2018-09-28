import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

class SearchPage extends Component {

    state = {
        query: '',
        ready: false
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value,
            ready: false
        })
    }

    handleClick = (event) => {
        this.setState({
            ready: true
        })
    }

    render() {

        const { query, ready } = this.state;

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
                    <Grid item xs={12}>
                        {ready && <SearchResults query={query}/>}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SearchPage;