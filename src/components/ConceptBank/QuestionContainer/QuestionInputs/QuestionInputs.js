import React from 'react';
import styles from './QuestionInputs.css';
import Aux from 'global/hoc/Aux'

import { Input, Select } from 'antd';
const TextArea = Input.TextArea;
const Option = Select.Option;

export class  QuestionOptions extends React.Component  {
    render(){
        return(
            <Select 
            onChange={(event) => this.props.updateState(event, 'type')} 
            className={styles.inputs}
            defaultValue="what">
                <Option value="what">What?</Option>
                <Option value="who">Who?</Option>
                <Option value="how">How?</Option>
                <Option value="when">When?</Option>
                <Option value="where">Where?</Option>
                <Option value="why">Why?</Option>
            </Select>
        )
    }
}

export class  VerbInput extends React.Component  {
    render(){
        return(
            <Input
            onChange={(event) => this.props.updateState(event.target.value, 'verb')} 
            className={styles.inputs} 
            placeholder="verb"
            id={0}/>
        );
    }
}

export class  ConceptInput extends React.Component  {
    render(){
        return(
            <TextArea
            onChange={(event) => this.props.updateState(event.target.value, 'concept')}
            className={styles.inputs}
            placeholder="concept to define" 
            autosize={{ minRows: 1, maxRows: 2 }}
            id={1}/>
        );
    }
}

export class  LinkInput extends React.Component  {
    render(){
        return(
            <Input
            onChange={(event) => this.props.updateState(event.target.value, 'link')}
            className={styles.inputs}
            placeholder="linking words"
            addonAfter={"?"}
            id={2}/>
        );
    }
}

export class  AnswerInput extends React.Component  {
    render(){
        return(
            <TextArea 
            onChange={(event) => this.props.updateState(event.target.value, 'answer')} 
            className={styles.inputs}
            placeholder="right answer" 
            autosize={{ minRows: 1, maxRows: 2 }} 
            id={3}/>
        );
    }
}

export class  WrongAnswersInput extends React.Component {
    render(){
        return(
            <Aux>
            <TextArea 
            onChange={(event) => this.props.updateState(event.target.value, 'wrongAnswer1')}
            className={styles.inputs}
            placeholder="wrong answer" 
            autosize={{ minRows: 1, maxRows: 2 }}
            id={4}/>
            <TextArea 
            onChange={(event) => this.props.updateState(event.target.value, 'wrongAnswer2')}
            className={styles.inputs}
            placeholder="wrong answer" 
            autosize={{ minRows: 1, maxRows: 2 }}
            id={5}/>
            <TextArea 
            onChange={(event) => this.props.updateState(event.target.value, 'wrongAnswer3')}
            className={styles.inputs}
            placeholder="wrong answer" 
            autosize={{ minRows: 1, maxRows: 2 }}
            id={6}/>
            </Aux>
        );
    }
}