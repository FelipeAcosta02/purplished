import React from 'react';
import styles from './CardTitle.module.scss';

import { Row, Col, Input, Button } from 'antd';
const TextArea = Input.TextArea;

export default class extends React.Component {
    render(){
        return(
            <Row gutter={8} align="center" justify="space-between" type="flex">
                <Col span={24} className={styles.Name}>
                    <Input defaultValue={'My Concept Card'} placeholder={'Please write a title for this concept card'} />
                </Col>
                <Col xs={24} sm={18} md={20} lg={20} xxl={22}>
                    <TextArea autosize={{minRows:2,maxRows:2}} className={styles.TextArea}/>
                </Col>  
                <Col xs={12} sm={3} md={2} lg={2} xxl={1}>
                    <Button icon="picture" className={styles.Buttons}/>
                    <Button icon="file-text" className={styles.Buttons}/>
                </Col>
                <Col xs={12} sm={3} md={2} lg={2} xxl={1}>
                    <Button type="primary" icon="shrink" className={styles.Buttons}/>
                    <Button type="danger" icon="delete" className={styles.Buttons}/>
                </Col> 
            </Row>       
        )
    }
}