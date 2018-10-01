import React, {  Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class CustomizedTabs extends Component {

    render() {

        const { handleChange, category } = this.props;

        return (
            <div>
                <Tabs value={category} onChange={(event, category) => handleChange(event, category)}>
                    <Tab label="Currently Reading" />
                    <Tab label="Want to Read" />
                    <Tab label="Read" />
                    <Tab label="None" />
                </Tabs>
            </div>
        );
    }
}

export default CustomizedTabs;