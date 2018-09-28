import React, { Component } from 'react';

import CustomizedTabs from './CustomizedTabs';

class ListBooks extends Component {

    state = {
        value: 0
    }

    handleChange(event, value) {
        this.setState({
            value: value
        })
    }
    
    render() {

        const { value } = this.state;

        return (
            <div>           
                <CustomizedTabs handleChange={this.handleChange.bind(this)} value={value}/>
            </div>
       );
    }
}

export default ListBooks;