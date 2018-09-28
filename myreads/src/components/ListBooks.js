import React, { Component } from 'react';

import CustomizedTabs from './CustomizedTabs';
import BooksContainer from './BooksContainer';

const shelves = ["currentlyReading", "wantToRead", "read"];

class ListBooks extends Component {

    state = {
        category: 0, // 0: currently reading, 1: want to read, 2: read, 3: others
    }

    handleChange(event, category) {
        this.setState({
            category: category
        })
    }

    filterBooks() {

        const { books } = this.props;

        const { category } = this.state;

        return (category === 3)? 
            books.filter(book => book.shelf === undefined) : 
            books.filter(book => book.shelf === shelves[category]);
    }
    
    render() {

        const { category } = this.state;

        return (
            <div>  

                <CustomizedTabs handleChange={this.handleChange.bind(this)} category={category}/>
                
                <BooksContainer books={this.filterBooks()} />
            </div>
       );
    }
}

export default ListBooks;