import React, {Component} from 'react';
import {Button, TopBar, Input, Card, Placeholder, Title, Icon, Grid} from 'global/UI'

class HomeView extends Component {
    render() {
        return (
            <div style={{marginBottom: '500px', width: '100%'}}>
                <TopBar>Click Me!</TopBar><br/>
                <br/><br/><br/>
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
                    </Grid><Grid
                    is="Light"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid><Grid
                    is="Light"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid>
                </Card><br/>
                <Card 
                is='Light' 
                above={<Button>Hey</Button>} 
                below={<Button>Bye</Button>} 
                style={{width:'90%', margin: 'auto'}}>
                    <Grid
                    is="Primary"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid><Grid
                    is="Primary"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid><Grid
                    is="Primary"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid>
                </Card><br/>
                <Card 
                is='Light' 
                above={<Button>Hey</Button>} 
                below={<Button>Bye</Button>} 
                style={{width:'90%', margin: 'auto'}}>
                    <Grid
                    is="Dark"
                    below={'Hey!'}
                    above={'bye!'}>
                        <div>hey</div>
                        <div>hey</div>
                        <div>hey</div>
                    </Grid>
                </Card><br/>
                
            </div>
        )
    }
}

export default HomeView