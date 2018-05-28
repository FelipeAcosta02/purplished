import React from 'react';
import PDFSample from './PDFSample/PDFSample'
import styles from './PDFMaker.module.scss'
import { Col, Row, Input, InputNumber, Button } from 'antd'



const {Group} = Input


class PDFMakerView extends React.Component {
    state = {
        title: "",
        heading: "",
        content:"",
        contentNum: 1,
        PDF: {
            title: "",
            heading: "",
            content:"",
            contentNum: 1,
        }
    }
    onChangedHandler = (event) => {
        const value = event.target.value
        const id = event.target.id
        this.setState({[id]: value})
    }
    onChangedNumHandler = (event) => {
        this.setState({contentNum: event})
    }
    createPDF = () => {
        const state = {...this.state}
        const title = state.title
        const heading = state.heading
        const content = state.content
        const contentNum = state.contentNum

        this.setState({
            PDF: {
                title: title,
                heading: heading,
                content:content,
                contentNum: contentNum,
        }})
    }

    render() {
        return(
            <div className={styles.Div} >
                <h2>Enter some text to generate a PDF</h2>
                <Group  className={styles.Group}>

                    <Row type="flex">
                        <Col span={20}>
                            <Input 
                                id={'title'} 
                                value={this.state.title}
                                onChange={(event)=>this.onChangedHandler(event)}
                                placeholder="Title"  /> 
                        </Col>
                    </Row>

                    <Row type="flex">
                        <Col span={20}>
                            <Input 
                                id={'heading'} 
                                value={this.state.heading}
                                onChange={(event)=>this.onChangedHandler(event)}
                                placeholder="Heading" />
                        </Col>
                    </Row>

                    <Row type="flex">
                        <Col span={20}>
                            <Input  
                                id={'content'} 
                                value={this.state.content}
                                onChange={(event)=>this.onChangedHandler(event)}
                                placeholder="Content" />
                        </Col>
                        <Col span={4}>
                            <InputNumber 
                                id={'contentNum'}
                                onChange={this.onChangedNumHandler}
                                min={1} 
                                max={3} 
                                defaultValue={this.state.contentNum}/>
                        </Col>
                    </Row>

                </Group>

                <Button 
                    type="primary"
                    onClick={this.createPDF}>Create PDF</Button>
                <div>
                <PDFSample 
                    title={this.state.PDF.title} 
                    heading={this.state.PDF.heading} 
                    content={this.state.PDF.content}
                    contentNum={this.state.PDF.contentNum}/>
                </div>
            </div>
        )
    }
}

export default PDFMakerView