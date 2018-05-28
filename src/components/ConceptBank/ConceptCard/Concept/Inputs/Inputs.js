import React from 'react';
import styles from './Inputs.module.scss';

import {Row, Col, Input, Button, Select} from 'antd'
const Option = Select.Option;
const InputGroup = Input.Group;

export default class extends React.Component {
    render(){
        const options = (
            <Select defaultValue="?" style={{ width: 45 }}>
                <Option value="?">?</Option>
                <Option value=":">:</Option>
            </Select>
        )
        return(
            <Col xxl={12}>
            <Row className={styles.Row} justify="center">
                    <Col span={24}> 
                        <Row gutter={2} justify="space-between" className={styles.Question} >
                            <Col lg={22} md={22} sm={21} xs={19} >
                                <Input addonAfter={options} placeholder="Question"/>
                            </Col>
                            <Col lg={2} md={2} sm={3} xs={5} >
                                <Button type="danger" icon="close-circle" />
                            </Col>
                        </Row>
                        <Row className={styles.Choices} gutter={8} >
                            <Col xs={24} sm={12} md={6} >
                                <Input placeholder="Answer" className={styles.Correct} />
                            </Col>    
                            <Col xs={24} sm={12} md={6} >
                                <Input placeholder="Incorrect" className={styles.Incorrect} />
                            </Col>    
                            <Col xs={24} sm={12} md={6} >
                                <Input placeholder="Incorrect" className={styles.Incorrect} />
                            </Col>    
                            <Col xs={24} sm={12} md={6} >
                                <Input placeholder="Incorrect" className={styles.Incorrect} />
                            </Col>    
                        </Row>
                        <Input placeholder="Affirmatory Sentence"/>
                    </Col>
                </Row>
                </Col>
        )
    }
}