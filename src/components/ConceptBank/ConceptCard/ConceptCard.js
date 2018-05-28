import React from 'react';
import styles from './ConceptCard.module.scss';
import Concept from './Concept/Concept'
import CardTitle from './CardTitle/CardTitle'

import { Card, Icon } from 'antd';

export default class extends React.Component {
    state = {
        cocepts: []
    }
    render(){
        return(
                <Card 
                className={styles.Card}
                bodyStyle={{backgroundColor:'#722ED1', paddingTop:'2.8em'}}
                title={<CardTitle/>}
                type="inner"
                actions={[<Icon type="plus-circle" />]}>
                    <Concept/>
                    <Concept/>
                    <Concept/>
                </Card>
        )
    }
}