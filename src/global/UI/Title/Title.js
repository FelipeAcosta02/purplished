import React from 'react';
import PropTypes from 'prop-types'
import styles from './Title.module.scss'

export default class Title extends React.Component {
    render(){
        let {is, color, children, ...rest} = this.props
        return(
            <h1 class={styles[is]+' '+styles[color]}  {...rest}>
                {children}
            </h1>
        )
    }
}
Title.defaultProps={
    is: 'Big',
    color: 'purple'
}
Title.propTypes={
    is: PropTypes.oneOf(['Giant', 'Big', 'Medium', 'Small']),
    color: PropTypes.oneOf(['dark', 'purple', 'white'])
}