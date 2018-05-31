import React from 'react';
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'
import { Link } from "react-router-dom";
import {stringToKebab} from 'global/utilities'
import {Logo} from 'global/UI'

 export default class NavBar extends React.Component {
     render(){
         let {is, links, ...rest} = this.props;
         let logoType = 'Primary';
         if(is==='Primary'){logoType='Default'}
         let items = links ? links.map((link, i)=>{
            if(link==='Home'){
                return(<div className={styles.ItemDiv} style={{padding:'5px 0'}} key={i}>
                        <Link to={'/'} >
                            <Logo is={logoType} style={{height:'40px', verticalAlign:'baseline', margin:'auto'}} />
                        </Link></div>)
            }else{
                return(<div className={styles.ItemDiv} key={i}><Link to={stringToKebab(link)}><li>{link}</li></Link></div>)
            }}) : null
         return(
            <div className={styles.NavBar+' '+styles[is]} {...rest}>
                <div style={{width: '100%', maxWidth:'1200px', display:'flex', margin:'auto'}}>
                    {items}
                </div>
            </div>
         )
     }
 }
NavBar.propTypes={
    is: PropTypes.oneOf(['Primary', 'Secondary']),
    links: PropTypes.arrayOf(PropTypes.string)
}
NavBar.defaultProps={
    is: 'Secondary',
    links: null
}

