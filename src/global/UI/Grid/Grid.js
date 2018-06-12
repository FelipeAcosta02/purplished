import React from 'react'
import PropTypes from 'prop-types'
import styles from './Grid.module.scss'

export default class Grid extends React.Component {
    render(){
        let {is, below, above, children, ...rest} = this.props
        let Above = above ? (<div className={styles.Above} >{above}</div>) : null;
        let Below = below ? (<div className={styles.Below} >{below}</div>) : null;
        let Content = <div key={'hey'} className={styles.Content}>{children}</div>
        if (children.length > 0) {
            Content = children.map((obj, i)=>(<div key={i} className={styles.Content}>{obj}</div>))
        }
        return(
            <div className={styles.Grid+' '+styles[is]} {...rest}>
                {Above}
                {Content}
                {Below}
            </div>
        )
    }
}
Grid.propTypes={
    is: PropTypes.oneOf(['Light', 'Dark', 'Primary']),
    below: PropTypes.element,
    above: PropTypes.element
}
Grid.defaultProps={
    is: 'Light',
    below: null,
    above: null
}