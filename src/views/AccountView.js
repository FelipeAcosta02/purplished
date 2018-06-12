import React from 'react';
import {Button, Spinner, Modal, Switch, UploadFile, Row, Col} from 'global/UI';

class AccountView extends React.Component {
    state = {
        visible: false, 
        loading: false,
        checked: false,
    }
    showModal = () => {
        this.setState({visible: true})
    }
    closeModal = () => {
        this.setState({visible: false})
    }

    showSpinner = () => {
        this.setState({loading: true})
    }
    toggleSwitch = () => {
        this.setState({checked: !this.state.checked})
        console.log(this.state.checked)        
    }

    render() {
        let spinner = null
        if (this.state.loading) {
            spinner = <Spinner/>
        }
        return(
            <div>
                <h1>Account</h1>
                {spinner}
                <Modal 
                show={this.state.visible} 
                onClose={this.closeModal} 
                above={'Heading text'}
                below={<Button onClick={this.closeModal}  >OK</Button>}>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                </Modal>
                <Button onClick={this.showModal} is="Primary" >Show modal</Button>
                <br/>
                <Button onClick={this.showSpinner} is="Primary" >Show spinner</Button>
                <Switch onChange={this.toggleSwitch} checked={this.state.checked} />
                <br/>
                <UploadFile is="Primary" />
                <div>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} >1</Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} >2</Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} >3</Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default  AccountView;