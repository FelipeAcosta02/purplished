import React from 'react';
import styles from './Concept.module.scss';
import Inputs from './Inputs/Inputs'

import { Card, Select, Button } from 'antd';
const Grid = Card.Grid;

export default class extends React.Component {
    state = {
        cocepts: []
    }
    render(){
        
        return(
            <Grid className={styles.Grid}> 
                <Inputs/>
                <Inputs/>
                <div className={styles.Alternative}>
                    <Button  icon="enter" type="default" />
                    <Button  icon="close" type="danger" />
                </div>
            </Grid>
        )
    }
}