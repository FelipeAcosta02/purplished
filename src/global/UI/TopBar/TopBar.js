import React from 'react';
import styles from './TopBar.module.scss'
import { Aux } from 'global/hoc';
import { Placeholder } from 'global/UI'

import {Button} from 'antd'

export default class extends React.Component {
    render(){
        return(
            <div className={styles.TopBar}>
                {this.props.children}
            </div>
        )
    }
}