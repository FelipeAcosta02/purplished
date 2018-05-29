import React from 'react';
import styles from './Content.module.scss'

const content = (props) => (
    <div className={styles.Content} >
       {props.children}
    </div>
)

export default content