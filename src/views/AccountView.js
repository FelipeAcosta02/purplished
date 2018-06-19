import React from 'react';
import {Button, Spinner, Switch} from 'global/UI';

class AccountView extends React.Component {
    state = {
        loading: false,
        checked: false,
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
                <br/>
                <Button onClick={this.showSpinner} is="Primary" >Show spinner</Button>
                <Switch onChange={this.toggleSwitch} checked={this.state.checked} />
                <br/>
            </div>
        )
    }
}

export default  AccountView;