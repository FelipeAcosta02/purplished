import React from 'react';
import styles from './Auth.module.scss'
import SignInCarousel from './SignInCarousel/SignInCarousel'
import LoginModal from './LoginModal/LoginModal'
import { Col, Row, Button } from 'antd';

class Auth extends React.Component {
    state = {
        visible: false,
        confirmLoading: false
    }
    showModal = () => {
        this.setState({visible: true})
    }
    handleOk = () => {
    this.setState({confirmLoading: true});
    setTimeout(() => {this.setState({visible: false,confirmLoading: false})}, 2000);
    }
    handleCancel = () => {this.setState({visible: false})}
    render() {
    const { visible, confirmLoading } = this.state
        return(
            <div className={styles.Div}>

                <Row justify="center" >
                    <Col span={24} >
                        <h1>Sign in</h1>
                    </Col>
                    <Col span={24}>
                        <SignInCarousel />
                    </Col>
                    <Col span={24} >
                        <Button type="primary" >Continue</Button>
                    </Col>

                    <Col span={24} >
                        <p className={styles.p}>Already have an account?</p>
                        <Button 
                            className={styles.Button} 
                            type="ghost" 
                            onClick={this.showModal}>
                                Log in
                        </Button>
                    </Col>
                </Row>
                <LoginModal 
                    isVisible={visible} 
                    confirmLoading={confirmLoading}
                    cancel={this.handleCancel} 
                    ok={this.handleOk}/>
            </div>
        );
    }
}

export default Auth