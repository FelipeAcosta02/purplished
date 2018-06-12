import React from 'react';
import PropTypes from 'prop-types'
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
import {stringToKebab} from 'global/utilities'
import {Logo,Icon} from 'global/UI'
import MediaQuery from 'react-responsive';

 export default class NavBar extends React.Component {
     state = {
         show: false
     }
     toggleMenu = () => {
        const oldShow = !this.state.show
        this.setState({show: oldShow})
        console.log(this.state.show)
     }
     closeMenu = () => {
         this.setState({show: false})
     }
     render(){
         let {is, links, ...rest} = this.props;
         let logoType = 'Primary';
         if(is==='Primary'){logoType='Default'}

         let logo = null
         let items = links.map((link, i) => {
            if (link==='Home') {
                logo = (<div className={styles.ItemDiv} style={{padding:'5px 0', marginLeft: '4px' }} key={i}>
                            <Link to={'/'} >
                                <Logo is={logoType} style={{height:'40px', verticalAlign:'baseline', margin:'auto'}} />
                            </Link>
                        </div>)
                return null;
            }else{
                return(<div className={styles.ItemDiv} key={i}>
                                <Link to={stringToKebab(link)}>
                                    <li>{link}</li>
                                </Link>
                            </div>)
            }}) 

            let colour = null
            if (is==="Primary") {
                colour = 'white'
            }
            if (is==="Default") {
                colour = '$purple-6'
            }

            let navIcon = null 
            if (!this.state.show) {
                navIcon = "menu"
            }else if (this.state.show) {
                navIcon = "x"
            }

         return(
            <div className={styles.NavBar+' '+styles[is]} {...rest}>
                <MediaQuery query="(max-width: 599px)">
                    <VerticalNav is={this.props.is} links={links} show={this.state.show} close={this.closeMenu}/>
                </MediaQuery>
                <div style={{width: '100%', maxWidth:'1200px', display:'flex', margin:'auto'}}>
                    {logo}
                    <MediaQuery query="(min-width: 600px)">
                        {items}
                    </MediaQuery>
                    <MediaQuery query="(max-width: 599px)">
                        <div className={styles.Hamburger}>
                            <Icon 
                                is={navIcon}
                                from="Feathericons" 
                                style={{color: colour, marginTop: '18px', cursor: 'pointer'}} 
                                onClick={this.toggleMenu} />
                        </div>
                </MediaQuery>
                </div>
            </div>
         )
     }
 }
NavBar.propTypes={
    is: PropTypes.oneOf(['Primary', 'Default']),
    links: PropTypes.arrayOf(PropTypes.string)
}
NavBar.defaultProps={
    is: 'Default',
    links: null
}

// Vertical navigation bar
class VerticalNav extends React.Component {
    render() {
        let {is, links, show} = this.props;
        let items = links.map((link, i) => {
            if (link==='Home') {
                return null
            }else{
                return (<div className={styles.ItemDiv} key={i}  >
                    <Link to={stringToKebab(link)} onClick={this.props.close} >
                        <li >{link}</li>
                    </Link>
                </div>)
            }
        }) 

        return(
            <div className={styles.Vertical+' '+styles[is]} style={{transform: show ? 'translateY(0)' : 'translateY(-100vh)'}} >
                {items}
            </div>
        )
    }
}