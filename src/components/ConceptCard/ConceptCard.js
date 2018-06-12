import React from 'react';
import QuestionInputs from './QuestionInputs/QuestionInputs'
import {Card, Button, Grid, Input} from 'global/UI'

class ConceptCard extends React.Component {
    render() {
        return(
            <div>
                <Card 
                is='Primary' 
                above={<p>Concept card name</p>}
                style={{width:'90%', margin: 'auto', marginTop: '50px'}}>
                    <Grid
                    is="Light" >
                       <QuestionInputs/>
                    </Grid>
                    <Grid
                    is="Light" >
                       <QuestionInputs/>
                    </Grid>
                </Card>
            </div>
        )
    }
}

export default ConceptCard