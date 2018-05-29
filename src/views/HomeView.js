import React, {Component} from 'react';
import {Button, TopBar, Input, Card, Placeholder, Title} from 'global/UI'


class HomeView extends Component {
    render() {
        return (
            <div style={{marginBottom: '500px', width: '100%'}}>
                <TopBar>Click Me!</TopBar><br/>
                <br/><br/><br/>
                <Title is="Giant" color="dark">Hello!</Title>
                <Card>hello world!</Card>
                <h1>Home</h1><br/>
                <Placeholder/><br/>
                <Button is="Primary" onClick={()=> console.log('clicked!')}>Top Bar!</Button><br/><br/><br/><br/>
                <Input  addonAfter={"hey"} onChange={(event)=>console.log(event.target.value)} /><br/>
                <Input is="Area"  addonBefore={<Button is="Destroy">hey</Button>}/><br/>
                <Input is="Small"  addonAfter={<Button is="Primary">hey</Button>} addonBefore={<div>---</div>}/><br/>
                <Input  is="Large"  addonBefore={<div>hey</div>} placeholder="type your credit card information"/><br/>
            </div>
        )
    }
}

export default HomeView