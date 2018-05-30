import React from 'react';
import PropTypes from 'prop-types'
import styles from './Modal.module.scss';
import { Aux } from 'global/hoc';
import Backdrop from 'global/UI/Backdrop/Backdrop';

const Heading = (props) => (<Aux>
        <div className={styles.CloseButton} onClick={props.onClose}>&times;</div>
        <div className={styles.Heading} >    
            {props.children}
        </div>
    </Aux>)
const Footer = (props) => (<div className={styles.Footer} >
       {props.children}
    </div>)

export default class Modal extends React.Component {
    render() {
        let { show, onClose, children, above, below, ...rest } = this.props
        let Above = above ? (<Heading onClose={onClose}>{above}</Heading>) : null;
        let Below = below ? (<Footer>{below}</Footer>) : null;
        return(
            <Aux>
                <div className={styles.Modal} {...rest}
                style={{transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? '1' : '0',}} >
                    {Above}
                    <div className={styles.Content}>
                            {children}
                    </div>                    
                    {Below}
                </div>
                <Backdrop 
                    show={show}
                    clicked={onClose} />
            </Aux>
        )
    }
} 
Modal.propTypes={
    show: PropTypes.bool,
    above: PropTypes.element,
    below: PropTypes.element,
    onClose: PropTypes.func
}
Modal.defaultProps={
    show: true,
    onClose: null,
    above: null,
    below: null
}