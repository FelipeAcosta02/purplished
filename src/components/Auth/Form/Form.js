import React from 'react';
import styles from './Form.module.scss'
import { Input, Col, Row } from "global/UI";

class Form extends React.Component {
    render() {
        let extraInput = null 

        if (this.props.type === 'signIn') {
            extraInput = <Col style={styling.col} xs={12} sm={12} md={12} lg={12} xl={12} ><Input placeholder="Name" is="Area"/></Col>
        }

        if (this.props.type === 'login') {
            // Default case
            // Does nothing (yet)
        }
        return(
            <div className={styles.Div}>
            <Row>
                {extraInput}
                <Col style={styling.col} xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Input placeholder="E-mail" />
                </Col>
                <Col style={styling.col} xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Input placeholder="Password" type="password"/>
                </Col>
            </Row>
        </div>
        )
    }
}
const styling = {
    col: {
        margin: '5px',
        padding: '1px',
    }
}
export default Form