import React from 'react';
import styles from './QuestionContainer.css';
import Aux from 'global/hoc/Aux';
import { QuestionOptions, VerbInput, ConceptInput, LinkInput, AnswerInput, WrongAnswersInput } from './QuestionInputs/QuestionInputs';

import { Col, Row, Input, Button } from 'antd';

class QuestionContainer extends React.Component {
    state = {
        questionObject: {
            type: 'multiple-choice',
            question: 'what',
            concept: null,
            link: null,
            answer: null,
            wrongAnswer1: null,
            wrongAnswer2: null,
            wrongAnswer3: null,
        }
    }
    updateState = (value, inputName) => {
        const questionObject = this.state.questionObject;
        value = value.trim()
        questionObject[inputName]= value;
        this.setState({questionObject: questionObject});
    }
    render(){
        return(
        <Aux>
            <Row type="felx" align="top" justify={'end'}>
                <Col span={2} className={styles.deleteQuestion}>
                    <Button 
                    type="normal" 
                    icon="close"
                    size="small"
                    shape="circle"
                    onClick={() => this.props.delete(this.props.id)}/>
                </Col>
            </Row>
            <Input.Group  >
                <Row type="flex" justify="space-around" gutter={16} align="top" className={styles.questionRow}>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <QuestionOptions 
                        updateState={this.updateState}/>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <VerbInput 
                        updateState={this.updateState}/>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <ConceptInput 
                        updateState={this.updateState}/>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <LinkInput 
                        updateState={this.updateState} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <AnswerInput 
                        updateState={this.updateState} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} >
                        <WrongAnswersInput 
                        updateState={this.updateState} />
                    </Col>
                </Row>
            </Input.Group>
            <Row>
                <Col span={24} >
                    <p className={styles.p}>{this.state.questionObject.concept} {this.state.questionObject.verb} {this.state.questionObject.link} {this.state.questionObject.answer}</p>
                </Col>
            </Row>
        </Aux>
        )
    }
}

export default QuestionContainer