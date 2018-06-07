import React from 'react';
import PropTypes from "prop-types";
import styles from './Backdrop.module.scss'

const backdrop = ({clicked, show, ...rest}) => {
    return(
        show ? <div className={styles.Backdrop} onClick={clicked}  {...rest}></div> : null
    )
}

backdrop.propTypes={
    show: PropTypes.bool
}

backdrop.defaultProps={
    show: false
}

export default backdrop