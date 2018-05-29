import React from 'react';
import styles from './Footer.module.scss'

const footer = (props) => (
    <div className={styles.Footer} >
       {props.children}
    </div>
)

export default footer