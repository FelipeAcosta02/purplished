import React from 'react';
import Modal from 'global/UI/Modal/Modal'

const { Heading, Content, Footer } = Modal

class AccountView extends React.Component {
    state = {
        visible: true
    }
    showModal = () => {
        this.setState({visible: true})
        console.log(this.state.visible)
    }
    closeModal = () => {
        this.setState({visible: false})
    }

    render() {
        return(
            <div>
                <h1>Account</h1>
                <Modal 
                    show={this.state.visible} 
                    modalClosed={this.closeModal} >
                    <Heading closeHandler={this.closeModal} >
                        Heading text
                    </Heading>
                    <Content>
                        Content text
                    </Content>
                    <Footer>
                        <button onClick={this.closeModal} >OK</button>
                    </Footer>
                </Modal>
                <button onClick={this.showModal} >Show modal</button>
            </div>
        )
    }
}

export default AccountView;