import React from 'react';
import styles from './Auth.module.scss'
import {Modal, Button, Col, Row, Input} from 'global/UI'

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
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                            <h1>Sign in</h1>
                        </Col>
                        <Col xs={18} sm={24} md={24} lg={24} xl={24}  >
                        <div className={styles.FormDiv}>
                            <Input style={{margin: '10px'}} placeholder="Name"/>
                            <Input placeholder="Email"/>
                            <Input placeholder="Password" type="password"/>
                        </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Button 
                                style={styling.button} 
                                is="Primary" >
                                    Continue
                            </Button>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
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
                            <Input />
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
    input: {
        margin: '10px'
    }

}

export default Auth