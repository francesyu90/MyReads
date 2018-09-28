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

    render() {
        return (
            <div className="search-page">
                <Grid container>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <SearchBar updateQuery={this.updateQuery} />
                        Query: {this.state.query}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SearchPage;