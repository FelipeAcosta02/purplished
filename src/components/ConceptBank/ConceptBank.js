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
                    <Row type="flex" justify="center" align={'center'}>
                        <Col xs={{offset: 0, span:24}} sm={{offset: 3, span:14}} md={{offset: 2, span:16}} lg={{offset: 2, span:18}}>
                            <h1>My Concept Bank</h1>
                        </Col>
                        <Col xs={24} sm={3} md={2}>
                            <Button type="primary">Add New Card</Button>
                        </Col>
                    </Row>
                </TopBar>
                <Col xs={23} sm={22} md={21} lg={20} xl={19} className={styles.div}>
                    <ConceptCard/>
                    <ConceptCard/>
                </Col>
                <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/>
            </Row>
        )
    }

}