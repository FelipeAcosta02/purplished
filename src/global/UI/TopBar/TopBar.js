import React from 'react';
import styles from './TopBar.module.scss'

export default class TopBar extends React.Component {
    render(){
        return(
            <div className={styles.TopBar}>
                {this.props.children}
            </div>
        )
    }
}