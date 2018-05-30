import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.scss'

const Heading = (props) => (
    <div className={styles.Heading}>
        {props.children}
    </div>
)
const Footer = (props) => (
    <div className={styles.Footer}>
        {props.children}
    </div>
)

export default class Card extends React.Component {
    render(){
        let {is, children, above, below, ...rest} = this.props;
        let Above = above ? (<Heading>{above}</Heading>) : null;
        let Below = below ? (<Footer>{below}</Footer>) : null;
        return(
            <div className={styles.Card+' '+styles[is]} {...rest}>
                {Above}
                <div className={styles.Content}>{children}</div>
                {Below}
            </div>
        )
    }
}
Card.propTypes={
    is: PropTypes.oneOf(['Dark', 'Light', 'Primary']),
    above: PropTypes.element,
    below: PropTypes.element
}
Card.defaultProps={
    is: 'Primary',
    above: null,
    below: null
}