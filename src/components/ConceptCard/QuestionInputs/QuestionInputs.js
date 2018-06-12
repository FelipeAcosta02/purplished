import React from 'react';
import {Input,Row,Col} from 'global/UI'

class ConceptCard extends React.Component {
    state = {
        question: '',
        correct: '',
        incorrects: ['', '', ''],
        sentence: '',

    }
    render() {
        return(
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Input placeholder="Question"  addonAfter={'?'} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Input placeholder="Answer" />
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Input placeholder="Incorrect"/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Input placeholder="Incorrect"/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Input placeholder="Incorrect"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Input placeholder="Affirmatory sentence"/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ConceptCard