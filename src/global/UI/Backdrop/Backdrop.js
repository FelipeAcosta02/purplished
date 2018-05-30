import React from 'react';
import styles from './Backdrop.module.scss'

const backdrop = ({clicked, show, ...rest}) => {
    return(
        show ? <div className={styles.Backdrop} onClick={clicked}  {...rest}></div> : null
    )
}

export default backdrop