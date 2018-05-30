import React from 'react';
import styles from './Auth.module.scss'
import Form from './Form/Form'
import {Modal, Button} from 'global/UI'
import { Row, Col } from "react-grid-system";

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
                <Row type="flex" justify="center" >
                    <Col span={24} >
                        <h1>Sign in</h1>
                    </Col>
                    <Col xs={16} sm={12} md={10} lg={8} xl={6} xxl={4} >
                        <div className={styles.FormDiv}>
                            <Form  type="signIn"/>
                        </div>
                    </Col>
                    <Col span={24} >
                        <Button 
                            style={styling.button} 
                            is="Primary" >
                                Continue
                        </Button>
                    </Col>

                    <Col span={24} >
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
        marginTop: '20px'
    }
}

export default Auth