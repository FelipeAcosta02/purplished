import React from 'react';
import styles from './Heading.module.scss'
import { Aux } from "global/hoc";

const heading = (props) => (

    <Aux>
        <div className={styles.CloseButton} onClick={props.closeHandler}>&times;</div>
        <div className={styles.Heading} >
        
       {props.children}
    </div>
    </Aux>
    
)

export default heading