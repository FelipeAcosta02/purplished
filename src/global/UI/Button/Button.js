import React from 'react';
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

export default class Button extends React.Component {
    render(){  
        let {is, children, ...rest} = this.props 
        return(
            <button className={styles[is]} disabled={is==="Disabled"} {...rest}>{children}</button>
        )
    }
}
Button.defaultProps={
    is: 'Default'
}
Button.propTypes ={
    is: PropTypes.oneOf(['Primary', 'Default', 'Disabled', 'Destroy']),
}
