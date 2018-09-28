import React, { Component } from 'react';

import CustomizedTabs from './CustomizedTabs';

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
                { category === 0 && <h1> 0 </h1> }
                { category === 1 && <h1> 1 </h1> }
                { category === 2 && <h1> 2 </h1> }
            </div>
       );
    }
}

export default ListBooks;