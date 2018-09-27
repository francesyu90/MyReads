import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { Grid } from '@material-ui/core';

class SearchPage extends Component {
    render() {
        return (
            <div className="search-page">
                <Grid container>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <SearchBar />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SearchPage;