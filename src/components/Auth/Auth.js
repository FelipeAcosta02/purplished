import React from 'react';
import styles from './Auth.module.scss'
import Form from './Form/Form'
import {Modal, Button, Col, Row} from 'global/UI'

class Auth extends React.Component {
    state = {
        visible: false,
    }
    showModal = () => {
        this.setState({visible: true})
    }
    closeModal = () => {
        this.setState({visible: false})}
    render() {
    const { visible } = this.state
        return(
            <div className={styles.Div}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <h1>Sign in</h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}  >
                            <div className={styles.FormDiv}>
                                <Form  type="signIn"/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button 
                                style={styling.button} 
                                is="Primary" >
                                    Continue
                            </Button>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <p className={styles.p}>Already have an account?</p>
                            <Button 
                                style={styling.button} 
                                onClick={this.showModal}>
                                    Log in
                            </Button>
                        </Col>
                    </Row>
                
                <Modal
                    above={'Log in'}
                    show={visible} 
                    onClose={this.closeModal}
                    below={ <Button 
                                onClick={this.closeModal} 
                                is="Primary">
                                    Continue
                            </Button>} >
                        <div>
                            <Form type="login"/>
                        </div>
                </Modal>
            </div>
        );
    }
}
const styling = {
    button : {
        marginTop: '20px',
    },
}

export default Auth