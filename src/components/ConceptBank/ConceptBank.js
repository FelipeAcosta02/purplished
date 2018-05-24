import React from 'react';
import styles from './ConceptBank.css';
import QuestionContainer from './QuestionContainer/QuestionContainer'
import { generateID } from 'global/utilities'

import { Card, Row, Col, Icon } from 'antd';
const Content = Card.Grid;

class ConceptBank extends React.Component {
    state = {
        questionObjectsArray: [],
        questionContainers: []
    }

    addQuestionHandler = (event) => {
        const newQuestionContainers = [...this.state.questionContainers]
        const id = generateID()
        newQuestionContainers.push(<QuestionContainer id={id} delete={this.deleteQuestionHandler}/>)
        this.setState({questionContainers: newQuestionContainers})
    }

    deleteQuestionHandler = (index) => {
                console.log(index)
                const newQuestionContainers = [...this.state.questionContainers]
                newQuestionContainers.splice(index, 1)                                  // I was just about to change splice() to filter()
                this.setState({questionContainers: newQuestionContainers})              // Please fullfill my destiny
                console.log(this.state.questionContainers, index)  
    }
    
    render() {
        let content = this.state.questionContainers.map((question, index) => {
            return(
                <Content key={index} className={styles.grid}>
                 {question}
                </Content>
            )

          }
        )
        return(
            <Row type={'flex'} justify="center" className={styles.row}>
                <div className={styles.row}> hey</div>
                <Col span={22}>
                    <Card 
                    bordered
                    actions={[<Icon type="plus-circle-o" 
                            onClick={this.addQuestionHandler}/>]}>
                            <h1>{this.props.name}</h1>
                            {content}
                    </Card> 
                </Col>
            </Row>
        )
    }
}

export default ConceptBank;
