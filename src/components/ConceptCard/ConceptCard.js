import React from 'react';
import QuestionInputs from './QuestionInputs/QuestionInputs'
import {Card, Grid, Input, Col, Row} from 'global/UI'

class ConceptCard extends React.Component {
    render() {
        return(
            <div>
                <Card 
                is='Primary' 
                above={<ConceptHeading />}
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

const ConceptHeading = (props) => (
    <div>
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} >
                <Input /* is="Ghost" */ placeholder="Concept card name" />
            </Col>
        </Row>
        <Row>
             <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                <Input is="Area" placeholder="Instructions" />
            </Col>
        </Row>
    </div>
)