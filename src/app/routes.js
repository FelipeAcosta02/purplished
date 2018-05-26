import React from 'react';
import HomeView from 'views/HomeView';
import CreateTestView from 'views/CreateTestView';
import MyClassesView from 'views/MyClassesView'; 
import MyGroupsView from 'views/MyGroupsView'; 
import AccountView from 'views/AccountView';
import SignInView from 'views/SignInView'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon, Layout } from 'antd';

const { Header, Footer } = Layout

class Routes extends React.Component {
    state = {
        current: null
    }
    changedTabHandler = (event) => {
        this.setState({current: event.key})
    }
    render() {
        
        return (
            <Router>
                <div>
                    
                    <Menu
                        onClick={this.changedTabHandler}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                            <Menu.Item key="home"> 
                                <Link to="/" >Home</Link>
                            </Menu.Item>
                            <Menu.Item key="my-classes">
                                <Link to="/my-classes" >My classes</Link>
                            </Menu.Item>
                            <Menu.Item key="my-groups">
                                <Link to="/my-groups" >My groups</Link>
                            </Menu.Item>
                            <Menu.Item key="create-test">
                                <Link to="/create-test" >Create Test</Link>
                            </Menu.Item>
                            <Menu.Item key="app">
                                    <Link to="/account" >
                                        <Icon type="smile-o"  />
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="sign-in">
                                <Link to="/sign-in" >Sign In</Link>
                            </Menu.Item>
                        </Menu>
                        
                        <Route exact path="/" component={HomeView} />
                        <Route path="/my-classes" component={MyClassesView} />
                        <Route path="/my-groups" component={MyGroupsView} />
                        <Route path="/create-test" component={CreateTestView} />
                        <Route path="/account" component={AccountView} />
                        <Route path="/sign-in" component={SignInView} />

                        <Footer>
                            **Footer text**
                        </Footer>
                    </div>
            </Router>
        )
    }
   
}

export default Routes