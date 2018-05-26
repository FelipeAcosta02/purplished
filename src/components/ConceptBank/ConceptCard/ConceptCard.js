import React from 'react';
import styles from './ConceptCard.module.scss';
import Concept from './Concept/Concept'
import {Aux} from 'global/hoc'
 
import { Input, Card, Button, Row, Col } from 'antd';
const Grid = Card.Grid;

export default class extends React.Component {
    state = {
        cocepts: []
    }
    render(){
        return(
            <Card 
            className={styles.Card}
            title={"hey"}>
                <Grid className={styles.rid} style={{width:'90%', textAlign:'center', }}> 
                    <Concept/>
                </Grid>
            </Card>
        )
    }
}