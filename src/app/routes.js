import React from 'react'
import * as Views from 'views/_index'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {NavBar, Footer} from 'global/UI'
import {pascalToKebab} from 'global/utilities'

class Routes extends React.Component {
    state = {
        footerLinks:   [{main: "Welcome", subs: ["Bienvenido!", "Willkommen"]},
                        {main: "WOW", subs: ["Mecho"]},
                        ]
    }
    changedTabHandler = (event) => {
        this.setState({current: event.key})
    }
    render() {
        let views = Object.keys(Views).map((View, i)=>{
            if (View==='Home'){
                return(<Route exact path='/' key={i} component={Views[View]} />)
            }else{
                return(<Route path={'/'+pascalToKebab(View)} key={i} component={Views[View]} />)
            }})
        return (
            <Router>
                <div>
                    <NavBar is="Primary" links={['Home', 'My Classes', 'My Groups', 'Create Test', 'Account', 'Sign In']} />
                    {views}
                    <Footer links={this.state.footerLinks}/>
                </div>
            </Router>
        )
    }
    //<Route path="/my-classes" component={MyClassesView}
   
}

export default Routes