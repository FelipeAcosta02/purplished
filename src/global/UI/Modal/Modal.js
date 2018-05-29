import React from 'react';
import styles from './Modal.module.scss';
import { Aux } from 'global/hoc';
import Backdrop from 'global/UI/Backdrop/Backdrop';
import Heading from './Heading/Heading'
import Content from './Content/Content'
import Footer from './Footer/Footer'


class Modal extends React.Component {
    static Heading = Heading
    static Content = Content
    static Footer = Footer

    render() {
        return(
            <Aux>
                <div 
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }} >
                    {this.props.children}
                </div>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.onClose} />
            </Aux>
        )
    }
} 

export default Modal