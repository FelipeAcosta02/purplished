import React, {Component} from 'react';
import {Button, TopBar, Input, Card, Placeholder, Title, Icon} from 'global/UI'

class HomeView extends Component {
    render() {
        return (
            <div style={{marginBottom: '500px', width: '100%'}}>
                <TopBar>Click Me!</TopBar><br/>
                <br/><br/><br/>
                <Title is="Giant" color="dark">Hello!</Title>
                <Card is='Light' above={<Button>Hey</Button>} below={<Button>Bye</Button>} style={{width:'90%', margin: 'auto'}}>hello world!  <br/> From a Light Card </Card><br/>
                <Card is='Dark' above={<Title color='white' >Hey!</Title>} below={<Button>Bye</Button>} style={{width:'90%', margin: 'auto'}}>hello world! <br/> From a Dark Card </Card>
                <Icon is="link" size={128} from="Feathericons"/>
                <Card above={<Title color='Purple'>Hey!</Title>} below={<Button>Bye</Button>} style={{width:'90%', margin: 'auto'}}>hello world! <br/> From a Primary Card </Card>
                <Icon is="link" size={128} from="Feathericons"/>
            </div>
        )
    }
}

export default HomeView