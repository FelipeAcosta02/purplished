import React from 'react';
import Modal from 'global/UI/Modal/Modal'
import NavBar from 'global/UI/NavBar/NavBar'


const { Heading, Content, Footer } = Modal

class AccountView extends React.Component {
    state = {
        visible: false
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
                    onClose={this.closeModal} >
                    <Heading onClose={this.closeModal} >
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
                <NavBar></NavBar>
            </div>
        )
    }
}

export default AccountView;