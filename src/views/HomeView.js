import React, {Component} from 'react';
import {Button, TopBar, Card, Title, Grid} from 'global/UI'

class HomeView extends Component {
    render() {
        return (
            <div style={{marginBottom: '10px', width: '100%'}}>
                <TopBar>Click You!</TopBar>
                <br/>
                <br/>
                <Title is="Giant" color="dark">Hello!</Title>
                <Card 
                is='Primary' 
                above={<Button>Hey</Button>} 
                below={<Button>Bye</Button>} 
                style={{width:'90%', margin: 'auto'}}>
                    <Grid
                    is="Light"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid>
                    <Grid
                    is="Light"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid>
                </Card>
            </div>
        )
    }
}

export default HomeView