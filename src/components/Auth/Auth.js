import React from 'react';
import styles from './Auth.module.scss'
import {Modal, Button, Col, Row, Input, Title} from 'global/UI'

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
                            <Title is="Medium">Sign in</Title>
                        </Col>
                        <Col xs={18} sm={24} md={24} lg={24} xl={24}  >
                        <div className={styles.FormDiv}>
                            <Input style={{margin: '10px'}} placeholder="Name"/>
                            <Input style={{margin: '10px'}} placeholder="Email"/>
                            <Input style={{margin: '10px'}} placeholder="Password" type="password"/>
                        </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Button 
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
                            <Input style={{margin: '10px'}} placeholder="Name / Email"/>
                            <Input style={{margin: '10px'}} placeholder="Password" type="password"/>
                        </div>
                </Modal>
            </div>
        );
    }
}
const styling = {
    input: {
        margin: '10px'
    },

}

export default Auth