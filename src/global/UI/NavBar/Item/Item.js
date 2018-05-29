import React from 'react';
import styles from "./Item.module.scss";

const item = (props) => (
    <div className={styles.ItemDiv} >
        <li>
            {props.children}
        </li>
    </div>
    
)

export default item