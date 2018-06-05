import React from 'react';
import Modal from 'global/UI/Modal/Modal'
import {Button, Spinner} from 'global/UI'

class AccountView extends React.Component {
    state = {
        visible: false, 
        loading: false
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

    render() {
        let spinner = null
        if (this.state.loading) {
            spinner = <Spinner/>
        }

        const mediaQueryList = window.matchMedia('(min-width: 400px)');
        mediaQueryList.onchange = function(mql){
            if (mql.matches) {
                spinner = <Spinner/>
            }
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
            </div>
        )
    }
}

export default AccountView;