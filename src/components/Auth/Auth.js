import React from 'react';
import styles from './Auth.module.scss'
import LoginModal from './LoginModal/LoginModal'
import Form from './Form/Form'
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