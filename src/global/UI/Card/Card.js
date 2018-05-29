import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.scss'

const Heading = (props) => {
    
}
const Content = (props) => {

}
const Footer = (props) => {

}

export default class Card extends React.Component {
    static Heading = Heading;
    static Content = Content;
    static Footer = Footer;
    render(){
        return(
            <div className={styles.Card}>
                <div className={styles.}>

                </div>
                <div className={styles.}>

                </div>
                <div className={styles.}>

                </div>
            </div>
        )
    }
}
Card.propTypes={

}
Card.defaultProps={

}