import React from 'react';
import styles from './Form.module.scss'
import { Col, Input, Row } from 'antd';

class Form extends React.Component {
    render() {
        let extraInput = null 

        if (this.props.type === 'signIn') {
            extraInput = <Col span={24} ><Input placeholder="Name"/></Col>
        }

        if (this.props.type === 'login') {
            // Default case
            // Does nothing (yet)
        }
        return(
            <div className={styles.Div}>
            <Row>
                {extraInput}
                
                <Col span={24} >
                    <Input placeholder="E-mail"/>
                </Col>
                <Col span={24} >
                    <Input placeholder="Password"/>
                </Col>
            </Row>
        </div>
        )
    }
}
export default Form