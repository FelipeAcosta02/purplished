import React from 'react'
import styles from './ConceptBank.module.scss'
import {TopBar} from 'global/UI'
import ConceptCard from './ConceptCard/ConceptCard'

import {Button, Col, Row} from 'antd'

export default class extends React.Component {
    state = {
        cards: [{}]
    }
    render(){

        return(
            <Row justify="center" type="flex">
                <TopBar>
                    <div className={styles.TopButton}>
                        <Button type="primary">Add New Card</Button>
                    </div>
                </TopBar>
                <Col span={22} className={styles.div}>
                    <ConceptCard/>
                </Col>
                <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/>
            </Row>
        )
    }

}