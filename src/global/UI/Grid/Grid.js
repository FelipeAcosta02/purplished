import React from 'react'
import PropTypes from 'prop-types'
import styles from './Grid.module.scss'

export default class Grid extends React.Component {
    render(){
        let {is, below, above, children, ...rest} = this.props
        let Above = above ? (<div className={styles.Above} >{above}</div>) : null;
        let Below = below ? (<div className={styles.Below} >{above}</div>) : null;
        let Content = children.map((obj, i)=>(<div key={i} className={styles.Content}>{obj}</div>))
        console.log(children)
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