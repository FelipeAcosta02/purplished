import React from 'react';
import HomeView from 'views/HomeView';
import CreateTestView from 'views/CreateTestView';
import MyClassesView from 'views/MyClassesView'; 
import MyGroupsView from 'views/MyGroupsView'; 
import AccountView from 'views/AccountView';
import SignInView from 'views/SignInView'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, Footer} from 'global/UI'


class Routes extends React.Component {
    state = {
        footerLinks:    [{main:"My Classes", subs:['My Topics', 'Your Topics']},
                        {main:"Main", subs:['Page 1', 'Page 2']},
                        {main:"Lol", subs:['lol', 'hahaha']},
                        {main:"Test", subs:['i want to sleep', 'but this is fun']},]
    }
    changedTabHandler = (event) => {
        this.setState({current: event.key})
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar is="Primary" links={['/', 'My Classes', 'My Groups', 'Create Test', 'Account', 'Sign In']} />    
                        <Route exact path="/" component={HomeView} />
                        <Route path="/my-classes" component={MyClassesView} />
                        <Route path="/my-groups" component={MyGroupsView} />
                        <Route path="/create-test" component={CreateTestView} />
                        <Route path="/account" component={AccountView} />
                        <Route path="/sign-in" component={SignInView} />

                        <Footer links={this.state.footerLinks}/>
                    </div>
            </Router>
        )
    }
   
}

export default Routes