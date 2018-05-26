import React from 'react';
import Form from '../Form/Form'
import { Modal } from 'antd'

class LoginModal extends React.Component {
    render() {
        return(
            <Modal
                title="Log in"
                visible={this.props.isVisible}
                okText="Continue"
                onOk={this.props.ok}
                confirmLoading={this.props.confirmLoading}
                onCancel={this.props.cancel}
                bodyStyle={{height: '200px'}} >
                    <div>
                        <Form type="login"/>
                    </div>
                
                </Modal>
        )
    }
}

export default LoginModal