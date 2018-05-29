import React from 'react';
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

export default class Button extends React.Component {
    render() {
        return(
            <button {...this.props} className={styles[this.props.is]}>{this.props.children}</button>
        )
    }
}
Button.defaultProps={
    is: 'Default'
}
Button.propTypes ={
    is: PropTypes.oneOf(['Primary', 'Default', 'Disabled', 'Destroy']),
}