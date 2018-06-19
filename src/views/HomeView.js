import React, {Component} from 'react';
import {Title} from 'global/UI'

class HomeView extends Component {
    render() {
        return (
            <div style={{marginBottom: '10px', width: '100%'}}>
                <Title is="Giant">Hello there!</Title>
                <Title is="Big">Welcome to Purplished ...</Title>
            </div>
        )
    }
}

export default HomeView