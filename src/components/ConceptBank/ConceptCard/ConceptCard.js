import React from 'react';
import styles from './ConceptCard.module.scss';
import Concept from './Concept/Concept'
import { Card } from 'antd';
const { Grid } = Card;

export default class extends React.Component {
    state = {
        cocepts: []
    }
    render(){
        return(
            <Card 
            className={styles.Card}
            title={"hey"}>
                <Grid className={styles.Grid}> 
                    <Concept/>
                </Grid>
            </Card>
        )
    }
}