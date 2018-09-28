import React, {  Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class CustomizedTabs extends Component {

    render() {

        const { handleChange, value } = this.props;

        return (
            <div>
                <Tabs value={value} onChange={(event, value) => handleChange(event, value)}>
                    <Tab label="Currently Reading" />
                    <Tab label="Want to Read" />
                    <Tab label="Read" />
                </Tabs>
            </div>
        );
    }
}

export default CustomizedTabs;