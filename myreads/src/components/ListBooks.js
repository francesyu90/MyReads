import React, { Component } from 'react';

import CustomizedTabs from './CustomizedTabs';
import BooksContainer from './BooksContainer';

class ListBooks extends Component {

    state = {
        category: 0, // 0: currently reading, 1: want to read, 2: read
    }

    handleChange(event, category) {
        this.setState({
            category: category
        })
    }
    
    render() {

        const { category } = this.state;

        return (
            <div>           
                <CustomizedTabs handleChange={this.handleChange.bind(this)} category={category}/>
                <BooksContainer category={category} />
            </div>
       );
    }
}

export default ListBooks;